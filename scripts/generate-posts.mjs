/**
 * Genera 3 articoli del blog chiamando l'API Claude.
 * Richiede la variabile d'ambiente ANTHROPIC_API_KEY.
 * Uso: node scripts/generate-posts.mjs
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const blogDir = join(here, '..', 'src', 'assets', 'blog');
const briefPath = join(here, '..', 'AUTOMAZIONE-BLOG.md');

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
  console.error('❌ ANTHROPIC_API_KEY non impostata.');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const brief = readFileSync(briefPath, 'utf8');

const existingFiles = readdirSync(blogDir).filter((f) => f.endsWith('.md'));
const existingTitles = existingFiles.map((f) =>
  f.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/-/g, ' ').replace(/\.md$/, '')
);
const todayFiles = existingFiles.filter((f) => f.startsWith(today));

if (todayFiles.length >= 3) {
  console.log(`✅ Già presenti ${todayFiles.length} articoli per ${today}, nessuna generazione necessaria.`);
  process.exit(0);
}

const needed = 3 - todayFiles.length;
console.log(`📝 Genero ${needed} articolo/i per ${today}...`);

function slugify(title) {
  return (
    today +
    '-' +
    title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60)
  );
}

async function callClaude(prompt) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.content[0].text.trim();
}

async function generateTopics(count) {
  const prompt = `Sei un assistente editoriale per il blog tech consumer di Marco Peluso.
Elenca esattamente ${count} argomenti di articolo per la data ${today}, diversi tra loro.
Argomenti già pubblicati (NON ripetere): ${existingTitles.join(' | ')}

Regole:
- Solo tecnologia consumer (smartphone, tablet, app, videogiochi, accessori, tutorial, wearable, smart home)
- NO programmazione, sviluppo software, DevOps o argomenti da addetti ai lavori
- Ogni argomento deve essere distinto dagli altri ${count} di oggi
- Tono: appassionato, personale, per un pubblico generalista

Rispondi SOLO con un JSON array di stringhe, nessun altro testo. Esempio:
["Titolo articolo 1", "Titolo articolo 2", "Titolo articolo 3"]`;

  const raw = await callClaude(prompt);
  const match = raw.match(/\[[\s\S]*\]/);
  if (!match) throw new Error(`Risposta topics non valida: ${raw}`);
  return JSON.parse(match[0]);
}

async function generateArticle(topic, otherTopicsToday) {
  const prompt = `Sei Marco Peluso, 26 anni, blogger di tecnologia consumer. Scrivi un articolo per il tuo blog seguendo ESATTAMENTE queste istruzioni:

${brief}

Argomento di questo articolo: "${topic}"
Data: ${today}
Altri articoli già scritti oggi (mantieni argomento DISTINTO): ${otherTopicsToday.join(', ')}
Argomenti già sul blog (non ripetere): ${existingTitles.join(' | ')}

Scrivi SOLO il file markdown completo con frontmatter e corpo. Nessun altro testo prima o dopo.
Il frontmatter deve essere esattamente:
---
title: [titolo]
date: ${today}
excerpt: [una frase accattivante di riepilogo]
tags: [Tag1, Tag2]
---

Poi il corpo dell'articolo in italiano (400-800 parole), con apertura personale, sezioni ## , almeno una citazione > e chiusura con invito a tornare.`;

  return callClaude(prompt);
}

// Main
const topics = await generateTopics(needed);
console.log(`🗂️  Topic scelti: ${topics.join(', ')}`);

const writtenTopics = [];
for (const topic of topics) {
  console.log(`✍️  Scrivo: "${topic}"...`);
  const content = await generateArticle(topic, writtenTopics);
  const slug = slugify(topic);
  const filePath = join(blogDir, `${slug}.md`);

  if (existsSync(filePath)) {
    console.warn(`⚠️  File già esistente, salto: ${slug}.md`);
  } else {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Salvato: ${slug}.md`);
  }
  writtenTopics.push(topic);
}

console.log(`\n🎉 Generazione completata: ${writtenTopics.length} articolo/i scritti per ${today}.`);

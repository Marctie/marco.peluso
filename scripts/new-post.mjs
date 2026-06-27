// Helper to scaffold a new blog post file with today's date.
// Usage: node scripts/new-post.mjs "Titolo dell'articolo"
import { writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const blogDir = join(here, '..', 'src', 'assets', 'blog');

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Uso: node scripts/new-post.mjs "Titolo dell\'articolo"');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const slug =
  today +
  '-' +
  title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

const file = join(blogDir, `${slug}.md`);
if (existsSync(file)) {
  console.error(`Esiste già: ${file}`);
  process.exit(1);
}

const template = `---
title: ${title}
date: ${today}
excerpt: Scrivi qui una frase di riepilogo accattivante.
tags: [Tech]
---

Scrivi qui il contenuto dell'articolo in **markdown**.
`;

writeFileSync(file, template);
console.log(`✅ Creato ${file}`);

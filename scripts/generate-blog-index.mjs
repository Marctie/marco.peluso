// Scans src/assets/blog/*.md, reads their YAML frontmatter and builds
// manifest.json (the index the app loads). Run automatically before each build.
//
// Each post file must start with frontmatter, e.g.:
// ---
// title: Il mio articolo
// date: 2026-06-26
// excerpt: Una frase di riepilogo.
// tags: [AI, Web]
// ---
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const blogDir = join(here, '..', 'src', 'assets', 'blog');

/** Minimal YAML frontmatter parser (only the keys we use). */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*([\s\S]*?)\s*---/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      value = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      value = value.replace(/^["']|["']$/g, '');
    }
    meta[key] = value;
  }
  return { meta, body: raw.slice(match[0].length) };
}

function readingMinutes(body) {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

const files = readdirSync(blogDir).filter((f) => f.endsWith('.md'));
const posts = [];

for (const file of files) {
  const raw = readFileSync(join(blogDir, file), 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  const slug = file.replace(/\.md$/, '');
  if (!meta.title || !meta.date) {
    console.warn(`⚠️  Skipping ${file}: missing title/date in frontmatter`);
    continue;
  }
  const entry = {
    slug,
    title: meta.title,
    date: meta.date,
    excerpt: meta.excerpt || body.trim().slice(0, 160).replace(/\n/g, ' ') + '…',
    tags: Array.isArray(meta.tags) ? meta.tags : meta.tags ? [meta.tags] : [],
    readingMinutes: readingMinutes(body),
  };
  if (meta.cover)   entry.cover   = meta.cover;
  if (meta.youtube) entry.youtube = meta.youtube;
  posts.push(entry);
}

posts.sort((a, b) => b.date.localeCompare(a.date));
writeFileSync(join(blogDir, 'manifest.json'), JSON.stringify(posts, null, 2) + '\n');
console.log(`✅ manifest.json generato con ${posts.length} articol${posts.length === 1 ? 'o' : 'i'}.`);

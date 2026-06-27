# 🤖 Automazione blog — un articolo al giorno

Questo file è il "brief" che l'agente Claude usa ogni giorno per scrivere un nuovo
articolo del blog in autonomia. Puoi modificarlo per cambiare tono, argomenti o regole.

## Cosa deve fare l'agente, ogni giorno

1. Scegliere un argomento **tech** interessante e attuale (vedi temi sotto), evitando
   di ripetere titoli già presenti in `src/assets/blog/`.
2. Creare un nuovo file markdown in `src/assets/blog/` con il comando:
   ```bash
   npm run blog:new "Titolo dell'articolo"
   ```
   (genera un file `AAAA-MM-GG-slug.md` con il frontmatter già pronto)
3. Scrivere l'articolo (vedi "Formato" sotto), sostituendo il contenuto di esempio.
4. Rigenerare l'indice e verificare la build:
   ```bash
   npm run blog:index
   npm run build
   ```
5. Fare commit e push su `main`:
   ```bash
   git add src/assets/blog
   git commit -m "blog: nuovo articolo del giorno"
   git push
   ```
   Il push fa partire la GitHub Action che pubblica il sito aggiornato.

## Temi preferiti

Sviluppo web e mobile · Angular / Ionic · TypeScript · Intelligenza artificiale e LLM ·
Developer experience e tooling · Cloud e DevOps · Novità e tendenze del settore ·
Riflessioni sul mestiere di sviluppatore.

## Formato di ogni articolo

- **Lingua:** italiano, tono personale e diretto (sono Marco, 26 anni, developer).
- **Lunghezza:** 400–800 parole.
- **Frontmatter obbligatorio:**
  ```yaml
  ---
  title: ...
  date: AAAA-MM-GG        # la data di oggi
  excerpt: una frase di riepilogo accattivante
  tags: [Tag1, Tag2]
  ---
  ```
- **Struttura:** apertura che aggancia → 2-4 sezioni con `##` → chiusura con un invito
  a tornare domani. Usa elenchi, qualche blocco di codice quando ha senso, e almeno una
  citazione `>`.
- **Qualità:** niente filler, niente clickbait. Contenuto utile e onesto.

## Note tecniche

- I post sono solo file `.md` in `src/assets/blog/`. Il manifest (`manifest.json`) è
  generato automaticamente da `npm run blog:index` (gira anche in `prebuild`).
- Lo slug del file è anche l'URL: `/blog/AAAA-MM-GG-slug`.

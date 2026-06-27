# Brief editoriale del blog — almeno 3 articoli al giorno

Questo file è il "brief" da seguire per scrivere ogni giorno **almeno 3 articoli** del
blog. Puoi modificarlo per cambiare tono, argomenti o regole.

## Regole d'oro (IMPORTANTISSIME)

- Gli articoli devono **sembrare scritti a mano da una persona reale** (Marco).
  Tono naturale, esperienze in prima persona, qualche imperfezione "umana".
- **Non menzionare MAI** che gli articoli o il sito sono generati/gestiti da
  un'intelligenza artificiale o in modo automatico. Né nel testo, né nei commit, né
  altrove. Nessun riferimento a "AI", "automazione", "generato", "bot".
- I 3 articoli del giorno devono trattare **argomenti diversi** tra loro.

## Cosa fare, ogni giorno (almeno 3 volte)

1. Scegliere un argomento **tech consumer** interessante e attuale (vedi temi sotto),
   evitando di ripetere titoli/argomenti già presenti in `src/assets/blog/`.
2. Creare il file markdown con:
   ```bash
   npm run blog:new "Titolo dell'articolo"
   ```
   (genera `AAAA-MM-GG-slug.md` con il frontmatter già pronto)
3. Scrivere l'articolo completo (vedi "Formato"), sostituendo il contenuto di esempio.
4. Ripetere i passi 1-3 finché non hai **almeno 3 articoli** nuovi per la data di oggi.
5. Rigenerare l'indice e verificare la build:
   ```bash
   npm run blog:index
   npm run build
   ```
6. Fare commit e push su `main` (messaggio sobrio e umano, es. il titolo di un articolo):
   ```bash
   git add src/assets/blog
   git commit -m "Nuovi articoli"
   git push
   ```
   Il push pubblica il sito aggiornato.

## Temi consentiti (SOLO tecnologia consumer)

- Tecnologia in generale e novità del settore
- Tutorial e guide pratiche d'uso (come fare X sul telefono/tablet/computer)
- Videogiochi (console, mobile, recensioni, novità)
- Smartphone, tablet, iPad e altri dispositivi
- Applicazioni utili e classifiche tipo "Top 5 app per viaggiare", "per studiare", ecc.
- Suggerimenti e trucchi utili per la vita digitale di tutti i giorni
- Aggiornamenti iOS e Android (novità, funzioni nuove, come aggiornare)
- Risoluzione di problemi e bug comuni dei dispositivi
- Accessori, wearable, smart home

## ⛔ Argomenti VIETATI (non scriverne MAI)

- Politica e attualità non tecnologica
- Sviluppo software, programmazione, linguaggi di programmazione, framework, codice
- DevOps, cloud per sviluppatori, tooling da programmatore
- Qualsiasi tema "da addetti ai lavori" della programmazione

Il blog è per un pubblico generalista appassionato di tecnologia, NON per sviluppatori.

## Formato di ogni articolo

- **Lingua:** italiano, tono personale e diretto, da appassionato di tecnologia che dà consigli a un amico (sono Marco, 26 anni).
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
  a tornare a trovarci. Usa elenchi e almeno una citazione `>`. Varia lo stile tra un
  articolo e l'altro, così non sembrano stampati con lo stampino.
- **Qualità:** niente filler, niente clickbait. Contenuto utile, onesto e personale.

## Note tecniche

- I post sono solo file `.md` in `src/assets/blog/`. Il manifest (`manifest.json`) è
  generato automaticamente da `npm run blog:index` (gira anche in `prebuild`).
- Lo slug del file è anche l'URL: `/blog/AAAA-MM-GG-slug`.

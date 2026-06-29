---
title: Alert e overlay Twitch gratis con StreamElements — guida completa
date: 2026-06-29
excerpt: StreamElements è la piattaforma gratuita più usata dagli streamer per alert, overlay, chatbot e punti canale. Ecco come configurarlo da zero in 20 minuti.
tags: [Streaming, Twitch, StreamElements, OBS, Tutorial, Gratis]
cover: https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80&auto=format&fit=crop
youtube: https://www.youtube.com/results?search_query=streamelements+guida+completa+twitch+alert+overlay+italiano
---

Quando qualcuno segue il tuo canale, si iscrive o dona, vuoi che succeda qualcosa di visivo sullo stream — un'animazione, un suono, un messaggio. Su Twitch, la piattaforma gratuita più usata per farlo è **StreamElements**. Ecco come configurarla da zero.

---

## Cos'è StreamElements?

StreamElements è una piattaforma online gratuita che offre:
- **Alert** (animazioni per follow, sub, donazioni)
- **Overlay** (la grafica sovrapposta allo stream)
- **Chatbot** (comandi automatici in chat)
- **Punti canale personalizzati** con premi riscattabili
- **Leaderboard** e statistiche del canale

Non va installato sul PC — gira nel browser e si integra con OBS tramite un semplice URL.

---

## 1. Crea l'account StreamElements

Vai su [streamelements.com](https://streamelements.com) e clicca **Login con Twitch**. Autorizza l'app — StreamElements si collega automaticamente al tuo canale.

Il dashboard mostra tutte le sezioni: Alert, Overlay, Chatbot, Store, Statistiche.

---

## 2. Configura gli Alert

Vai su **Alert Box** nel menu laterale.

Trovi già degli alert preconfigurati per:
- **Follower**
- **Subscriber**
- **Donazione**
- **Cheer** (Bits)
- **Host / Raid**

Per personalizzarli:
1. Clicca sull'alert che vuoi modificare
2. Cambia: **animazione** (layout), **durata**, **suono**, **testo** visualizzato
3. Trovi centinaia di template gratuiti nei temi predefiniti

Per alert più personalizzati (con animazioni custom), puoi importare pacchetti da [ko-fi.com](https://ko-fi.com) o **nerd-or-die.com** — molti gratuiti.

### Come aggiungere l'Alert Box in OBS:
1. In StreamElements, vai su **Alert Box** → copia il link nella pagina
2. In OBS, aggiungi fonte → **Browser**
3. Incolla l'URL → imposta larghezza 1920, altezza 1080
4. Metti questa fonte in cima a tutte le altre nella scena

---

## 3. Crea il tuo Overlay

L'overlay è la grafica permanente sullo stream: cornice webcam, barra spettatori, timer, ultime donazioni.

Vai su **My Overlays** → **New Overlay**:
1. Scegli un template gratuito dalla libreria (cerca per gioco o stile)
2. Personalizza: logo, colori, font, posizione degli elementi
3. Aggiungi widget: **Follower recenti**, **Donazione più alta**, **Timer sessione**

Come nel punto precedente, esporta l'URL e aggiungilo come Browser Source in OBS.

---

## 4. Imposta il Chatbot

Il bot di StreamElements risponde ai comandi in chat automaticamente.

Vai su **Chatbot** → **Commands**. Comandi utili da configurare:

| Comando | Risposta |
|---|---|
| `!discord` | Link al server Discord |
| `!social` | Link ai social |
| `!build` | Descrizione del PC setup |
| `!gioco` | Nome del gioco in stream |
| `!orario` | Orario dei prossimi stream |

Per attivare il bot: vai su **Chatbot** → clicca **Join Channel** — il bot entra nel tuo canale Twitch.

---

## 5. Store dei punti canale

StreamElements ha un sistema di punti canale integrabile con quello di Twitch. Puoi creare premi che i tuoi spettatori riscattano con i punti accumulati guardando lo stream:

- Scegliere la musica
- Disattivare la webcam per 5 minuti
- Far fare qualcosa allo streamer
- Qualsiasi cosa tu voglia

Vai su **Loyalty** → **Store** per configurarli.

---

## Riepilogo setup completo

1. Crea account StreamElements → collega Twitch
2. Alert Box → copia URL → aggiungi in OBS come Browser Source
3. Overlay → crea → copia URL → aggiungi in OBS come Browser Source (sotto Alert Box)
4. Chatbot → Join Channel → configura comandi base
5. Testa tutto prima dello stream: usa il pannello "Test Alerts" in StreamElements

In 20 minuti hai uno stream che sembra professionale — e senza spendere nulla.

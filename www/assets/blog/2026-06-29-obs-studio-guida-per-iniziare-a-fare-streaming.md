---
title: OBS Studio — guida completa per iniziare a fare streaming da zero
date: 2026-06-29
excerpt: OBS è gratis, potente e usato da milioni di streamer. Ma la prima volta fa paura — ecco come configurarlo in 20 minuti e andare live su Twitch o YouTube.
tags: [Streaming, OBS, Twitch, YouTube, Gaming, PC]
cover: https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80&auto=format&fit=crop
youtube: https://www.youtube.com/results?search_query=obs+studio+guida+configurazione+streaming+twitch+youtube+italiano+2026
---

OBS Studio è il software di streaming più usato al mondo dagli streamer — ed è completamente gratuito. Il problema è che alla prima apertura sembra complicatissimo. Niente paura: in questa guida lo configuri in 20 minuti e sei pronto per andare live.

## Cos'è OBS Studio

OBS (Open Broadcaster Software) ti permette di:
- Fare streaming live su Twitch, YouTube, Kick e altri
- Registrare il video del tuo schermo in alta qualità
- Mixare più sorgenti video e audio (gioco, webcam, microfono, sovrapposizioni)
- Aggiungere overlay, transizioni e scene professionali

## Installazione

Vai su [obsproject.com](https://obsproject.com) e scarica la versione per Windows, Mac o Linux. È gratuita e open source.

All'avvio comparirà la **Procedura guidata di configurazione automatica** — dì di sì. OBS analizzerà il tuo PC e imposterà bitrate e risoluzione in modo ottimale.

## La struttura di OBS: scene e fonti

OBS funziona con **Scene** e **Fonti**:

- **Scene**: sono le "schermate" che puoi mostrare in diretta (es. "gameplay", "schermata pausa", "schermata offline")
- **Fonti**: sono gli elementi dentro ogni scena (es. acquisizione gioco, webcam, musica, overlay)

Per iniziare, crea una scena "Gameplay":
1. Clicca **+** sotto "Scene" → dai un nome
2. Clicca **+** sotto "Fonti" → scegli **Acquisizione gioco** (per giochi) o **Acquisizione schermo** (per tutto il desktop)

## Configurare l'audio

Vai in **Impostazioni** → **Audio** e imposta:
- **Dispositivo audio desktop** = l'audio del PC (gioco, musica)
- **Dispositivo mic/aux** = il tuo microfono

Nella sezione **Mixer audio** in basso puoi regolare i volumi in tempo reale — tienili sotto il livello di allarme rosso.

## Configurare lo streaming

1. Vai su **Impostazioni** → **Stream**
2. Seleziona il servizio: **Twitch**, **YouTube**, ecc.
3. Incolla la tua **chiave di stream** (la trovi nel pannello del tuo account Twitch/YouTube)
4. Scegli il server più vicino (per Twitch: Europe → Frankfurt o Milan)

Per la **qualità video**, vai in **Impostazioni** → **Output**:
- **Bitrate video**: 3.000–6.000 Kbps per 1080p60 su Twitch
- **Encoder**: usa **NVENC** se hai una GPU NVIDIA, altrimenti **x264**
- **Risoluzione**: 1920×1080 o 1280×720

## Le prime scene consigliate

Uno setup base per iniziare:

| Scena | Cosa mostra |
|---|---|
| Gameplay | Il gioco + webcam piccola in angolo |
| Pausa | Schermata statica "Torno subito" |
| Offline | Schermata "Live dalle ore X" |
| Solo cam | Solo webcam, per parlare al pubblico |

Per aggiungere la webcam: **Fonti** → **+** → **Dispositivo di acquisizione video** → seleziona la tua webcam.

## Overlay e grafica gratuita

Per rendere lo stream più professionale puoi aggiungere:
- **Alert** per nuovi follower/abbonati: usa [StreamElements](https://streamelements.com) o [Streamlabs](https://streamlabs.com) — gratuiti
- **Overlay**: cerchi template gratuiti su itch.io o nerd-or-die.com
- **Chat** visibile sullo schermo: aggiungi il browser source con la chat di Twitch

## Consigli per il primo stream

1. **Fai sempre un test prima di andare live** — usa la modalità "Registrazione" per vedere come appare senza essere in diretta
2. **Controlla i livelli audio** — l'audio è più importante del video
3. **Inizia con 720p60** se il tuo PC fatica — meglio fluido a 720p che scattoso a 1080p
4. **Non guardare gli spettatori mentre giochi** — multitasking difficile all'inizio

OBS sembra complicato ma dopo 2-3 stream diventa automatico. L'importante è iniziare.

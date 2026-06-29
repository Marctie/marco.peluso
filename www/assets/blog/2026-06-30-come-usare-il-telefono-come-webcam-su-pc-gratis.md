---
title: Come usare il telefono come webcam su PC (gratis, senza app a pagamento)
date: 2026-06-29
excerpt: La tua webcam fa schifo o non ce l'hai? Il telefono che hai in tasca ha una fotocamera migliore — ecco come usarla come webcam su PC in meno di 5 minuti.
tags: [Smartphone, PC, Streaming, Tutorial, Consigli, Webcam]
cover: https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80&auto=format&fit=crop
youtube: https://www.youtube.com/results?search_query=usare+telefono+come+webcam+pc+gratis+tutorial+italiano
---

Le webcam dedicate di qualità costano dai 50 ai 200 euro. Ma il telefono che hai già in tasca ha quasi certamente una fotocamera migliore — e con le app giuste puoi usarla come webcam su PC in meno di 5 minuti, completamente gratis.

## Metodo 1: DroidCam (Android + Windows/Linux)

**DroidCam** è la soluzione più diffusa per Android. Funziona via USB o Wi-Fi.

### Setup via Wi-Fi:
1. Installa **DroidCam** sul telefono (Play Store — gratuito)
2. Installa **DroidCam Client** sul PC Windows (droidcam.app — gratuito)
3. Apri l'app sul telefono → annota l'indirizzo IP mostrato
4. Apri il client sul PC → inserisci l'IP → clicca Start
5. In OBS o qualsiasi videochiamata, seleziona "DroidCam Source" come telecamera

### Setup via USB (più stabile, zero lag):
1. Abilita il "Debug USB" sul telefono (Impostazioni → Info telefono → clicca 7 volte sul numero build → torna indietro → Debug USB)
2. Collega il telefono con il cavo USB
3. Apri DroidCam Client → seleziona USB → Start

**Limitazione versione gratuita:** risoluzione massima 480p. Per 1080p serve la versione premium (~4,99€).

---

## Metodo 2: iPhone come webcam (Continuity Camera)

Se hai un iPhone e un Mac, la soluzione è già integrata nel sistema operativo — si chiama **Continuity Camera**.

1. Aggiorna iPhone a iOS 16+ e Mac a macOS Ventura+
2. Assicurati che iPhone e Mac siano sullo stesso account iCloud
3. Avvicina l'iPhone al Mac — viene riconosciuto automaticamente come webcam
4. In FaceTime, Zoom, Teams o qualsiasi app, seleziona "iPhone" come sorgente video

Su **Windows**, Apple non ha rilasciato un client ufficiale, ma puoi usare DroidCam o EpocCam (vedi sotto).

---

## Metodo 3: EpocCam (iPhone + Windows/Mac)

**EpocCam** di Elgato è la soluzione più usata per iPhone su PC Windows. La versione gratuita funziona a 480p, quella premium (9,99€) arriva a 1080p con rimozione sfondo.

1. Installa **EpocCam** sull'iPhone (App Store)
2. Installa i **driver EpocCam** sul PC (sito Elgato)
3. Connetti iPhone e PC sulla stessa rete Wi-Fi
4. Apri EpocCam sul telefono — il PC riconosce automaticamente la videocamera

---

## Come usarlo in OBS

In tutti e tre i casi, OBS vede la videocamera del telefono come una normale webcam USB:

1. Apri OBS → **+** sotto le Fonti → **Dispositivo di acquisizione video**
2. Seleziona **DroidCam** o **EpocCam** dalla lista
3. Imposta la risoluzione (1080p se disponibile) e OK

Puoi posizionare la finestra della webcam dove vuoi sullo stream.

---

## Consigli per la qualità

- **Luce:** metti una luce davanti a te (lampada da scrivania), non dietro — la differenza è enorme
- **Stabilità:** usa un piccolo treppiede o un supporto per telefono — evita che tremi
- **Orientamento:** orizzontale (landscape) sempre per i video su PC
- **Cavo vs Wi-Fi:** preferisci USB per meno lag, specialmente durante lo streaming

Con DroidCam gratuito hai già un risultato migliore della maggior parte delle webcam economiche — e senza spendere nulla.

---
title: Come ottimizzare OBS per streaming a 60fps senza lag
date: 2026-07-02
excerpt: OBS a 60fps manda il PC in crisi? Ecco tutte le impostazioni da toccare per avere un stream fluido senza perdere FPS nel gioco — testate e funzionanti.
tags: [Streaming, OBS, PC, Gaming, Tutorial, Ottimizzazione]
cover: https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80&auto=format&fit=crop
youtube: https://www.youtube.com/results?search_query=ottimizzare+obs+60fps+senza+lag+tutorial+italiano
---

Fare streaming a 60fps in 1080p con OBS è fattibile anche su PC di fascia media — ma solo se configuri tutto nel modo giusto. Ecco le impostazioni che fanno la differenza.

---

## Il problema: CPU vs GPU

OBS usa di default l'encoder software **x264** (CPU). Il problema è che il gioco usa la CPU, e OBS anche — risultato: lag, frame drop, PC surriscaldato.

**La soluzione:** usare l'encoder hardware della GPU — **NVENC** per NVIDIA o **AMF** per AMD. L'encoder hardware è separato dai core di gioco e non influisce quasi per nulla sulle prestazioni.

---

## Impostazioni Output raccomandate

Vai in **OBS** → **Impostazioni** → **Output** → scheda **Streaming**:

| Impostazione | NVIDIA (NVENC) | AMD (AMF) | CPU (x264) |
|---|---|---|---|
| Encoder | NVENC H.264 | AMF H.264 | x264 |
| Bitrate | 6000 Kbps | 6000 Kbps | 4500 Kbps |
| Preset | Quality | Quality | veryfast |
| Profile | High | High | High |
| Keyframe | 2 | 2 | 2 |

Per controllare quale GPU hai: `Win + X` → **Gestione dispositivi** → **Schede video**.

---

## Impostazioni Video raccomandate

Vai in **OBS** → **Impostazioni** → **Video**:

- **Risoluzione base (tela):** 1920×1080
- **Risoluzione output (ridimensionata):** 1920×1080 (se hai GPU potente) o 1280×720 (se PC mid-range)
- **Filtro ridimensionamento:** Lanczos (qualità massima) o Bicubico (più veloce)
- **FPS:** 60

---

## Impostazioni avanzate

Vai in **OBS** → **Impostazioni** → **Avanzate**:

- **Priorità processo:** Alto (evita che altri processi rubino CPU a OBS)
- **Renderer video:** DirectX 11 (Windows — più stabile)
- **Formato colore:** NV12 (raccomandato per NVENC/AMF)

---

## Acquisizione gioco: modo corretto

Per catturare il gioco **usa sempre "Acquisizione gioco"** invece di "Acquisizione schermo" — consuma molto meno CPU/GPU.

Nelle impostazioni della fonte:
- **Modalità:** Cattura finestra specifica (seleziona il gioco)
- **Priorità finestra:** Titolo corrisponde al titolo attuale
- Spunta **Acquisizione SLI/Crossfire compatibile** SOLO se hai problemi con il gioco non catturato

---

## Controlla il bitrate: quanto basta davvero?

- **720p30:** 2.500 Kbps sufficienti
- **720p60:** 3.500 Kbps
- **1080p30:** 4.000–5.000 Kbps
- **1080p60:** 6.000 Kbps (limite Twitch per non-partner)

Se carichi su Twitch come partner o affiliate non hai il 6.000 Kbps come limite fisso, ma la maggior parte degli ISP italiani non dà upload sufficiente per andare oltre senza artefatti.

---

## Come capire se il PC sta reggendo

Durante lo stream, guarda il pannello **Statistiche** di OBS (Visualizza → Statistiche):

- **CPU dell'encoder:** deve stare sotto il 70%
- **Frame ignorati:** devono essere 0 (o meno dello 0,1%)
- **Rendering lag:** deve essere 0

Se vedi frame ignorati, abbassa bitrate o risoluzione. Se la CPU dell'encoder è alta, passa all'encoder GPU.

---

## Setup completo in 5 passi

1. Encoder → NVENC o AMF (mai x264 su PC gaming)
2. Bitrate → 6000 Kbps per 1080p60
3. Acquisizione gioco (non schermo)
4. Priorità processo → Alta
5. Monitora le statistiche OBS mentre sei in live

Con questo setup, anche su un PC con RTX 3060 e i5-12400 si streama a 1080p60 con meno del 5% di impatto sulle prestazioni nel gioco.

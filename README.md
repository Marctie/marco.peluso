# Marco Peluso — Portfolio & Tech Blog

Sito portfolio personale costruito con **Ionic + Angular**, pensato per girare sul
**web** e per essere convertito in **app Android** tramite Capacitor. Include un
**blog di tecnologia** aggiornato ogni giorno.

## 🚀 Sviluppo

```bash
npm install        # installa le dipendenze
npm start          # avvia in locale su http://localhost:4200
npm run build      # build di produzione nella cartella www/
```

## ✍️ Blog

Gli articoli sono file markdown in [`src/assets/blog/`](src/assets/blog/).
L'indice (`manifest.json`) viene generato automaticamente.

```bash
npm run blog:new "Titolo del nuovo articolo"   # crea un nuovo post
npm run blog:index                              # rigenera l'indice
```

La linea editoriale del blog è descritta in [AUTOMAZIONE-BLOG.md](AUTOMAZIONE-BLOG.md).

## 📱 App Android

```bash
npm run android:add     # aggiunge la piattaforma Android (una volta sola)
npm run android:sync    # build web + sync nel progetto nativo
npm run android:open    # apre il progetto in Android Studio
```

Servono **Android Studio** e l'SDK installati. La configurazione Capacitor è in
[capacitor.config.ts](capacitor.config.ts).

## 🌐 Deploy

Ad ogni push su `main`, la GitHub Action
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builda il sito e lo
pubblica su **GitHub Pages**.

> ⚙️ Prima volta: su GitHub vai in **Settings → Pages → Build and deployment** e imposta
> **Source: GitHub Actions**.

## 🧱 Stack

Ionic 8 · Angular 20 · Capacitor 8 · TypeScript · marked (rendering markdown).

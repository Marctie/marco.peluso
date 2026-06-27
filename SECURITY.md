# Sicurezza

Misure adottate per mantenere il sito il più solido possibile.

## Cosa è già attivo

- **Sito statico**: nessun backend, nessun database, nessun input utente lato server →
  superficie d'attacco ridotta al minimo.
- **HTTPS** forzato da GitHub Pages + `upgrade-insecure-requests` nella CSP.
- **Content Security Policy** restrittiva (`src/index.html`): script solo dal sito
  stesso, niente `object`/embed, niente framing del sito (`frame-ancestors 'none'`,
  anti-clickjacking).
- **Sanitizzazione automatica**: il contenuto del blog è renderizzato tramite il
  sanitizer integrato di Angular (`[innerHTML]`), che neutralizza eventuale HTML/JS
  malevolo.
- **Referrer-Policy** `strict-origin-when-cross-origin`.
- **Permessi minimi** nella GitHub Action di deploy (solo quelli necessari a Pages).
- **Dependabot** attivo: aggiornamenti settimanali di dipendenze e action, con patch
  di sicurezza automatiche.
- Link esterni con `rel="noopener noreferrer"` (anti tabnabbing).

## Consigli aggiuntivi (lato account/GitHub)

- Tieni il repository **privato** se non vuoi esporre la struttura del progetto.
- Abilita la **2FA** sull'account GitHub.
- In *Settings → Code security*: attiva **secret scanning** e **Dependabot alerts**.
- Proteggi il branch `main` (richiedi PR / impedisci force-push) se collaborano altri.

## Segnalare un problema

Per segnalazioni di sicurezza scrivere a **marcopeluso99@gmail.com**.

> Nota onesta: nessun sito è "impenetrabile" al 100%. Per un sito statico come questo,
> però, queste misure coprono praticamente tutti i vettori d'attacco realistici.

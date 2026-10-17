# SWEDISH NARA - Nordisk Premium IPTV 🇸🇪

Officiell webbplats för **SWEDISH NARA** – Sveriges ledande leverantör av premium IPTV med över 22 000 livekanaler i 4K Ultra HD och 95 000 filmer & serier.

---

## 📁 Struktur och Sidor (Multi-Page Architecture)

Projektet är uppbyggt med en ren och snabb flersidig struktur:

1. **`index.html`** - Huvudsidan med sportgrafik, livekanaler, serverstatus och kundomdömen.
2. **`shop.html`** - IPTV Butik med abonnemangsplaner (1, 3, 6, 12 månader) och val av antal enheter.
3. **`appar.html`** - Nedladdning av rekommenderade IPTV-appar (TiviMate, IPTV Smarters Pro, Android APK, Windows, Mac, iOS).
4. **`guide.html`** - Detaljerad steg-för-steg installationsguide för alla enheter (Samsung/LG Smart TV, Apple TV, Firestick, Android Box, PC).
5. **`faq.html`** - Omfattande frågor och svar om leverans, hastighet, Swish-betalning och gratis test.
6. **`reseller.html`** - Återförsäljarpanel (Reseller Credits) för partners.
7. **`assets/logo.png`** - Officiell högupplöst logotyp.
8. **`css/style.css`** - Nordisk mörk design med svenska flaggans färger (#005293 & #FECC00) och glas-effekt.
9. **`js/config.js`** - Central konfiguration för priser, paket och WhatsApp-nummer.
10. **`js/app.js`** - Interaktiv funktionalitet, enhetsväljare, FAQ-ackordion och direkt WhatsApp-ordergenerering.

---

## ⚙️ WhatsApp & Kundtjänst

- **Officiellt WhatsApp-nummer:** `+1 902 703 6354`
- **Konfigurationsfil:** `js/config.js`
- Ändringar av priser och kontaktuppgifter görs enkelt i `js/config.js` och uppdateras automatiskt på alla sidor.

---

## 🚀 Snabbstart och Testning Lokalt

Öppna valfri `.html`-fil direkt i valfri webbläsare (Chrome, Edge, Safari) eller starta en lokal server:
```bash
python -m http.server 3000
```
Besök därefter `http://localhost:3000`.

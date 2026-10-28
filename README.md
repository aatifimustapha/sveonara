# SWEDISH NARA - Nordisk Premium IPTV 🇸🇪

Officiell webbplats för **SWEDISH NARA** – Sveriges ledande leverantör av premium IPTV med över 22 000 livekanaler i 4K Ultra HD och 95 000 filmer & serier.

🌐 **Live:** [https://sveonara.top](https://sveonara.top)

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
11. **`blog.html`** + **`blog/`** - Bloggens startsida och 16 SEO-artiklar (guider, tester och tips).
12. **`sitemap.xml`** - Alla 22 sidor med rena URL:er (utan `.html`).
13. **`robots.txt`** - Tillåter alla sökmotorer och pekar på sitemap.

---

## 🌍 Domän, Hosting & Driftsättning

| Del | Tjänst | Detaljer |
|---|---|---|
| Domän | Hostinger | `sveonara.top`, registrerad 2026-10-29, förnyas automatiskt 2027-10-29 (MAD 64.99/år) |
| DNS | Cloudflare (Free) | Nameservers: `byron.ns.cloudflare.com`, `tia.ns.cloudflare.com` |
| Hosting | Cloudflare Pages | Projekt `sveonara`, kopplat till GitHub-repot `aatifimustapha/sveonara` |
| SSL | Cloudflare | Universal SSL, HTTP omdirigeras automatiskt till HTTPS |

**Automatisk driftsättning:** varje `git push` till `main` publiceras automatiskt på Cloudflare Pages inom ungefär en minut. Ingen byggprocess krävs (statisk HTML).

- Förhandsvisning: `https://sveonara.pages.dev`
- Cloudflare Pages tar bort `.html` automatiskt: `/shop.html` → `/shop` (308).
- Redirect Rule i Cloudflare: `www.sveonara.top/*` → `sveonara.top/*` (301, query string bevaras).

### DNS-poster (Cloudflare)

| Typ | Namn | Innehåll | Syfte |
|---|---|---|---|
| CNAME | `@` | `sveonara.pages.dev` | Pages custom domain (proxied) |
| CNAME | `www` | `sveonara.top` | Omdirigeras till rotdomänen (proxied) |
| TXT | `@` | `google-site-verification=…` | Verifiering i Google Search Console – **får inte tas bort** |

---

## 🔍 SEO & Google Search Console

- Varje sida har `<link rel="canonical">` med ren URL på `https://sveonara.top`.
- Search Console: domänegendom `sveonara.top` verifierad via DNS (TXT-post).
- Sitemap `https://sveonara.top/sitemap.xml` inskickad – 22 sidor upptäckta.
- Manuell indexering begärd för `/`, `/shop` och `/blog` (2026-10-29).

**Vid nya sidor:** lägg till `<link rel="canonical">` i `<head>` och en `<url>`-post i `sitemap.xml`.

### Sökordsdata (Semrush, Sverige, okt 2026)

| Sökord | Volym/mån | KD % |
|---|---|---|
| iptv | 33 100 | 38 |
| iptv sverige | 4 400 | 20 |
| bästa iptv sverige | 320 | 7 |
| iptv sverige bäst i test | 260 | 12 |
| smart iptv sverige | 210 | 4 |

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

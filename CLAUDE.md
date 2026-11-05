# Eco Aqua – site-ul eco-aqua.ro

## Despre client
- Ovidiu, inginer cu peste 24 de ani de experiență în tratarea și purificarea apei. Firma: **SC Eco Aqua SRL** (zona Cluj, prefix 0264 – de confirmat).
- Este **începător în partea tehnică**: explicațiile se dau **în română, pas cu pas**, simplu, cu linkuri exacte și butoanele pe care trebuie să le apese. Folosește aplicația Claude pe Windows.
- Abonament Pro: lucrăm pe loturi mici și eficient (scripturi care extrag doar ce trebuie, nu citire de pagini întregi).

## Proiectul
- Site static: HTML + CSS + JS simplu, **fără build**. Fișiere: `index.html`, `analiza-apei.html`, `produse.html`, `domenii.html`, `style.css`, `script.js`.
- Depozit: https://github.com/ecoaqua/eco-aqua-site (ramura `main`). Găzduire: **Netlify**, https://eco-aqua.netlify.app (privat până la finalizare).
- Formularul de ofertă din `index.html#contact` folosește **Netlify Forms** (`data-netlify="true"`).
- Previzualizare navigabilă (privată, actualizată cu lotul 1): https://claude.ai/artifact/QE8Z1mu42HTqAgQFALPuLF – republicată dintr-o copie din scratchpad (index fără `<html>/<head>/<body>`, formularul cu `preventDefault`).
- Mesajele de commit se scriu în română.

## Poziționare și design (decizii luate cu clientul)
- **Țintă principală: firme și industrie (B2B)**; titlul principal (h1 + `<title>`) e totuși „Sisteme de tratare a apei industriale și casnice” (cerut de client, 05.11.2026); persoanele fizice rămân, dar în plan secund (casetă „Aveți nevoie de apă bună acasă?”, secțiunea „Casă și familie” la finalul paginii Domenii).
- Design modern, păstrând identitatea veche: albastru de ocean (`--navy`, `--deep`, `--blue`, `--aqua`), butoane galbene (`--sun`), sloganul „Tehnologii precise pentru purificarea apei”. Fonturi: Sora (titluri) + Manrope (text), din Google Fonts.
- Hero animat (valuri + bule, respectă `prefers-reduced-motion`), cifre-cheie (24+ ani, 130+ produse, 40+ domenii, garanție 1–5 ani), pictograme SVG inline, meniu mobil (☰), buton flotant de apel pe mobil.
- Laboratorul mobil de analiză a apei este argumentul principal de vânzare – scos în evidență.
- După orice modificare de layout: verificare cu Playwright la 390px și 1366px, fără scroll orizontal.

## Conținut
- Textele vin din site-ul vechi (Wayback Machine), copiate manual de client – `web.archive.org` refuză conexiunile din cloud.
- Pagini vechi încă necopiate: **Alte servicii**, **Contact**, articolul de pe **Blog** despre clorinare, și celelalte taburi din „Aplicații” (UV, clorinare, stații de tratare).
- Locuri marcate `[DE COMPLETAT]`: **e-mail**, **adresă/zonă**. Telefoane (de confirmat): 0746 183 771, 0264 221 643.
- Am scris eu (de verificat de client): descrierile scurte ale aplicațiilor/domeniilor; exemplele „lactate, panificație” la industria alimentară.

## Euro-Clear (furnizor principal) – URMĂTORUL PAS
- https://www.euro-clear.eu – producător maghiar (Euro-Clear Kft.). **Clientul are acordul lor** să le folosească pozele, descrierile și documentele.
- Gamă industrială: dedurizatoare, filtre, UV, prefiltre mecanice, osmoză inversă BlueClear și ARCTON, componente (supape, butelii, distribuitoare, rezervoare saramură, membrane, rășini, mase filtrante, dozare), stație cu zeolit. Gamă rezidențială: BlueSoft, RainWater, SmartWaterSoftener, DFA, CPF, Aquaz UV.
- Manuale PDF publice: https://www.euro-clear.eu/letoltesek/ (EN: /en/downloads/).
- Plan: **întâi gama industrială**, pe loturi de 5–10 produse; script care descarcă paginile și pozele și extrage doar nume/date tehnice/descriere; descrieri **adaptate în română** (nu traduse literal, pentru SEO); pozele optimizate; PDF-urile doar atașate ca descărcări.
- **Ce vinde clientul efectiv** (răspuns 05.11.2026): stații de tratare, clorinare, sterilizare UV, ozonizare, osmoză inversă, dedurizare, deferizare, filtrare și pompare. Din Euro-Clear preluăm doar produsele care intră în aceste categorii.
- **Aviz sanitar**: clientul confirmă că toate produsele au aviz sanitar în România.
- Produsele Euro-Clear se pun **lângă** catalogul vechi, nu îl înlocuiesc.
- Rețea: clientul a dat acces complet. `euro-clear.eu` merge (05.11.2026). Push-ul pe GitHub funcționează (permis de client pe 05.11.2026).
- Structura site-ului Euro-Clear: paginile industriale sunt în `/en/industrial-water-treatment/...` (vezi `page-sitemap.xml`). Pagini de produs individuale există doar pentru ARCTON RO (`termek-sitemap.xml`, 28 modele EN). Nu au ozonizare, pompare sau stații complete, iar clorinarea e probabil la „dosing-technology”.
- **Lot 1 (gata)**: secțiunea `#industrial` din `produse.html`, **la finalul paginii, după catalogul vechi** (cerința clientului: produsele vechi rămân primele), cu 5 carduri (dedurizatoare, filtrare/deferizare, UV VIQUA HighFlow, osmoză BlueClear/ARCTON, prefiltre DF/IWF). Pozele sunt în `img/euro-clear/*.webp` (max 600px). Cardul de osmoză nu are poză.
- **Lot 2 (gata)**: în `#industrial`, sub-capitolul „Componente și consumabile Euro-Clear” (supape Runxin/Autotrol/Fleck/Clack, pompe dozatoare Grundfos DDA/DDC/DDE – pentru clorinare, mase filtrante și rășini, membrane și carcase, butelii/rezervoare saramură/distribuitoare). Poza ARCTON adăugată la cardul de osmoză. 14 manuale PDF industriale (EN, ~16 MB) în `docs/euro-clear/`, legate în carduri prin `<details class="info docs">`.
- Rămase la Euro-Clear (opțional): cele 17 manuale Runxin, fișele tehnice ale maselor filtrante, stația cu zeolit, gama rezidențială (BlueSoft, RainWater, DFA, CPF, Aquaz UV).

## De făcut (în ordine)
1. Netlify: **gata** (05.11.2026). Proiect `eco-aqua` → https://eco-aqua.netlify.app, se publică automat la fiecare push pe `main`. Proiectul e **Private** (vizitatorii primesc 401 și pagină de login). **Decizia clientului: NU îl facem public („Make public”) până nu e site-ul finalizat.** Formularul se testează după ce devine public.
2. Produsele Euro-Clear (vezi mai sus).
3. Domeniul eco-aqua.ro legat la Netlify (de aflat registrarul).
4. Poze: lucrări reale, laboratorul mobil, echipa, logo – prin chat (+), upload pe GitHub sau Google Drive (de conectat la https://claude.ai/customize/connectors).
5. Studii de caz (clientul pregătește 2–3 proiecte reale).
6. Opțional: pagini „Probleme ale apei” (fier, mangan, duritate, nitrați, amoniu etc.) pentru SEO.
7. Plan de promovare: Google Business Profile, analiza concurenței, liste de firme țintă (industrie, HoReCa, pensiuni), licitații publice.

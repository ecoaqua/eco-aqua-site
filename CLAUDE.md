# Eco Aqua – site-ul eco-aqua.ro

## Despre client
- Ovidiu, inginer cu peste 24 de ani de experiență în tratarea și purificarea apei. Firma: **SC Eco Aqua SRL** (zona Cluj, prefix 0264 – de confirmat).
- Este **începător în partea tehnică**: explicațiile se dau **în română, pas cu pas**, simplu, cu linkuri exacte și butoanele pe care trebuie să le apese. Folosește aplicația Claude pe Windows.
- Abonament Pro: lucrăm pe loturi mici și eficient (scripturi care extrag doar ce trebuie, nu citire de pagini întregi).

## Proiectul
- Site static: HTML + CSS + JS simplu, **fără build**. Fișiere: `index.html`, `analiza-apei.html`, `produse.html`, `domenii.html`, `style.css`, `script.js`.
- Depozit: https://github.com/ecoaqua/eco-aqua-site (ramura `main`). Găzduire: **Netlify** (în curs de configurare – vezi mai jos).
- Formularul de ofertă din `index.html#contact` folosește **Netlify Forms** (`data-netlify="true"`).
- Previzualizare navigabilă (privată): https://claude.ai/artifact/QE8Z1mu42HTqAgQFALPuLF – republicată dintr-o copie din scratchpad (index fără `<html>/<head>/<body>`, formularul cu `preventDefault`).
- Mesajele de commit se scriu în română.

## Poziționare și design (decizii luate cu clientul)
- **Țintă principală: firme și industrie (B2B)**; persoanele fizice rămân, dar în plan secund (casetă „Aveți nevoie de apă bună acasă?”, secțiunea „Casă și familie” la finalul paginii Domenii).
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
- Întrebări deschise pentru client: ce produse vinde efectiv; ce produse au **aviz sanitar** în România; produsele Euro-Clear se adaugă lângă catalogul vechi sau le înlocuiesc pe cele echivalente?

## De făcut (în ordine)
1. Netlify: clientul s-a înregistrat cu GitHub; rămâne Import from Git → `eco-aqua-site` → Deploy, apoi verificat linkul `*.netlify.app` și formularul.
2. Produsele Euro-Clear (vezi mai sus).
3. Domeniul eco-aqua.ro legat la Netlify (de aflat registrarul).
4. Poze: lucrări reale, laboratorul mobil, echipa, logo – prin chat (+), upload pe GitHub sau Google Drive (de conectat la https://claude.ai/customize/connectors).
5. Studii de caz (clientul pregătește 2–3 proiecte reale).
6. Opțional: pagini „Probleme ale apei” (fier, mangan, duritate, nitrați, amoniu etc.) pentru SEO.
7. Plan de promovare: Google Business Profile, analiza concurenței, liste de firme țintă (industrie, HoReCa, pensiuni), licitații publice.

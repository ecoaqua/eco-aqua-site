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
- Poze de fundal în antete (05.11.2026): pe prima pagină 4 poze care se schimbă lent (`.hero-bg`, 32s), pe paginile secundare câte una (`.small-hero.photo`, `--bg`), cu strat albastru și caroiaj de „planșă tehnică”. **Clientul NU vrea pozele de pe site-ul Euro-Clear ca fundal** – folosim doar poze CC0 (lista în `img/fundal/SURSE.md`); de înlocuit cu poze reale ale clientului când le avem.
- Poze în conținut (05.11.2026, CC0, `img/domenii/SURSE.md`): bandă `.banner` sub fiecare categorie din `domenii.html`, poză în capul cardurilor „Industrii deservite” din `index.html` (`.photo-card` + `.card-img`), poză lângă „De ce să începeți” (`.split` + `.side-img`) și bandă la „Ce analizăm” în `analiza-apei.html`. **Clientul caută poze de la lucrările lui** – când le trimite, le punem în locul celor CC0.
- Secțiunea „Tehnologii pentru apa de proces…” (`#produse` din `index.html`, 05.11.2026): pe toată lățimea (`.flow`), cu fundal animat (caroiaj, lumini care se mișcă lent, bule `.flow-bubble`), 6 carduri cu poză (`.photo-card`), câte 3 pe rând. Surse: `img/solutii/SURSE.md`.
- Secțiunea „Despre Eco Aqua” (`#despre`): fundal cu **picături care cad pe apă** (`.ripples` + `.drop`, unde concentrice fine). Clientul NU a vrut varianta cu bule/valuri/caroiaj (prea asemănătoare cu restul) – nu o refolosi acolo.
- **Numele firmei pe site: „Eco Aqua”, nu „SC Eco Aqua SRL”** (cerința clientului, 05.11.2026). De discutat cu clientul: datele firmei (denumire completă, CUI, Nr. Reg. Com.) trebuie totuși să apară undeva (subsol / pagină de contact) – Legea 365/2002.
- Card „Producători consacrați” (în loc de „Echipamente de renume mondial”, care nu i-a plăcut clientului).
- Banda cu siglele partenerilor a fost adăugată și apoi **scoasă la cererea clientului** (05.11.2026); siglele (`img/parteneri/`, 29 de fișiere) se recuperează din istoricul git (commit „Siglele partenerilor, fundal nou la Despre…”). Nu le readăuga fără cerere.
- „Cum lucrăm” (prima pagină): cele 4 carduri au poze (`.process .photo-card`, numărul pasului alb peste poză); surse în `img/proces/SURSE.md`.
- Meniul de sus (05.11.2026, cerut de client): **Companie · Produse · Domenii · Analiza apei · Cere ofertă** (Companie prima, Analiza apei pe locul unde era Companie).
- Hero animat (valuri + bule, respectă `prefers-reduced-motion`), cifre-cheie (24+ ani, 130+ produse, 40+ domenii, garanție 2–5 ani – corectat de client), pictograme SVG inline, meniu mobil (☰), buton flotant de apel pe mobil.
- Laboratorul mobil de analiză a apei este argumentul principal de vânzare – scos în evidență.
- După orice modificare de layout: verificare cu Playwright la 390px și 1366px, fără scroll orizontal.

## Conținut
- Textele vin din site-ul vechi (Wayback Machine), copiate manual de client – `web.archive.org` refuză conexiunile din cloud.
- Pagini vechi încă necopiate: **Alte servicii**, **Contact**, articolul de pe **Blog** despre clorinare, și celelalte taburi din „Aplicații” (UV, clorinare, stații de tratare).
- Locuri marcate `[DE COMPLETAT]`: **e-mail**, **adresă/zonă**. Telefoane (de confirmat): 0746 183 771, 0264 221 643.
- Am scris eu (de verificat de client): descrierile scurte ale aplicațiilor/domeniilor; exemplele „lactate, panificație” la industria alimentară.

## Euro-Clear – SCOS DE PE SITE (05.11.2026)
- https://www.euro-clear.eu – producător maghiar; clientul are acordul lor pentru poze, descrieri, documente.
- Am adăugat două loturi (echipamente industriale + componente, cu 9 poze și 14 manuale PDF), apoi **clientul a cerut să fie scoase toate produsele Euro-Clear** (05.11.2026). Secțiunea `#industrial`, `img/euro-clear/` și `docs/euro-clear/` au fost șterse; se pot recupera din istoricul git (commit-urile „Lotul 2 Euro-Clear…” și „Secțiunea Echipamente industriale Euro-Clear (lotul 1)”). **Nu le readăuga fără cererea clientului.**
- Ce vinde clientul efectiv: stații de tratare, clorinare, sterilizare UV, ozonizare, osmoză inversă, dedurizare, deferizare, filtrare și pompare. Toate produsele au aviz sanitar în România.
- **Stații mobile containerizate** (05.11.2026): un singur card lat (`.card.wide`, poză stânga / text dreapta) în `#tratare` din `produse.html`, imediat după „Stații de tratare și echipamente industriale”. Poza e de la client (`img/produse/statie-containerizata.webp`), textul e descrierea lui, adaptată în română. Clientul NU vrea carduri separate pentru stații pe vehicul / skid și nici secțiune separată.
- Rețea: acces complet; push-ul pe GitHub funcționează.

## Catalogul din materialele vechi (05.11.2026)
- Clientul a urcat în `materiale-vechi/` (commit „Add files via upload”): `Produse.rar` (fișe .doc cu descrieri, tabele, poze), `Sigle Parteneri.rar` (29 de sigle de mărci partenere), `Prezentare Eco Aqua.docx`. Folderul a fost **scos din site** după extragere (ar fi fost public pe Netlify); se recuperează din istoricul git.
- Lista oficială de categorii: „Sait Categorii Produse+aplicatii filtre.doc” (16 grupe). `produse.html` e reconstruită după ea: 9 secțiuni (`#filtrare`, `#dedurizare`, `#osmoza`, `#statii`, `#dezinfectie`, `#pompe`, `#componente`, `#consumabile`, `#piscine`), 32 de carduri `.prod-card` cu poză (deferizatoarele sunt 3 carduri separate: BIRM, Pyrolox, Greensand; denitrificatoarele 2: simplex și duplex – cerința clientului) (`img/catalog/*.webp`), date principale (`.specs`) și tabele tehnice în `<details class="info tech">` (`.tbl-wrap`). Pompele și piscinele au rămas din catalogul anterior; în `#statii` sunt două carduri late: „Stații de tratare a apei” (`.statie-card`, două poze din fișă în `.duo` + descrierea completă: etape, echipamente, parametri – cerut de client) și „Stații mobile containerizate”.
- Unelte (în scratchpad, se pierd la închiderea sesiunii): conversie .doc→.docx cu LibreOffice, `unar` pentru .rar, scripturi `build_produse.py` + `assemble.py`.
- Neincluse intenționat: afirmațiile medicale din fișa ionizatorului (hemoroizi, diabet etc.). Tabelul dedurizatoarelor industriale avea ultima coloană greșită (repeta vasul de saramură) – scoasă; de cerut clientului diametrul buteliilor.
- În materiale există **logo-ul vechi** Eco Aqua (2985×987, „soluții profesionale pentru tratarea și epurarea apelor”) – încă nefolosit, de întrebat clientul.

## De făcut (în ordine)
1. Netlify: **gata** (05.11.2026). Proiect `eco-aqua` → https://eco-aqua.netlify.app, se publică automat la fiecare push pe `main`. Proiectul e **Private** (vizitatorii primesc 401 și pagină de login). **Decizia clientului: NU îl facem public („Make public”) până nu e site-ul finalizat.** Formularul se testează după ce devine public.
2. ~~Produsele Euro-Clear~~ – scoase la cererea clientului.
3. Domeniul eco-aqua.ro legat la Netlify (de aflat registrarul).
4. Poze: lucrări reale, laboratorul mobil, echipa, logo – prin chat (+), upload pe GitHub sau Google Drive (de conectat la https://claude.ai/customize/connectors).
5. Studii de caz (clientul pregătește 2–3 proiecte reale).
6. Opțional: pagini „Probleme ale apei” (fier, mangan, duritate, nitrați, amoniu etc.) pentru SEO.
7. Plan de promovare: Google Business Profile, analiza concurenței, liste de firme țintă (industrie, HoReCa, pensiuni), licitații publice.

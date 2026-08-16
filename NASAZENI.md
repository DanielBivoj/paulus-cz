# Nasazení · Mapa vnitřního světa

Adresa po nasazení: `https://cz.paulus.yoga/mapa-vnitrniho-sveta`

---

## Co balíček obsahuje

```
mapa-vnitrniho-sveta/
  index.html            aplikace s doplněnou hlavičkou, 2,3 MB
  og-image.jpg          náhled odkazu, 1200 × 630
  favicon-32.png
  apple-touch-icon.png
  icon-512.png
sitemap.xml             přepíše stávající, šest adres beze změny
robots.txt              přepíše stávající, nově zakazuje indexaci mapy
_headers                přepíše stávající, doplněná pravidla pro novou složku
NASAZENI.md             tento soubor
```

**Kořenový `index.html` v balíčku není.** Portálová stránka v repozitáři zůstane
nedotčená.

---

## Stránka je zatím skrytá

Je dostupná přes odkaz, ale vyhledávače ji nebudou indexovat. Zajišťují to tři
věci najednou, protože jedna sama nestačí.

1. `<meta name="robots" content="noindex, nofollow">` v hlavičce stránky
2. `X-Robots-Tag: noindex` v `_headers`, což platí i pro roboty, kteří meta
   značku ignorují
3. `Disallow: /mapa-vnitrniho-sveta` v `robots.txt` a vynechání ze sitemapy

**Až ji budete chtít zveřejnit**, změňte tyto tři věci naráz:

- v `index.html` přepište `noindex, nofollow` na `index, follow, max-image-preview:large`
- v `_headers` smažte řádek `X-Robots-Tag: noindex`
- v `robots.txt` smažte řádek `Disallow: /mapa-vnitrniho-sveta`
- do `sitemap.xml` přidejte záznam s prioritou 0.6

---

## Postup nahrání

1. V GitHubu otevřete repozitář `DanielBivoj/paulus-cz`, větev `main`.
2. Add file, Upload files, přetáhněte **obsah** balíčku, tedy složku
   `mapa-vnitrniho-sveta` a tři soubory z kořene.
3. Zkontrolujte náhled změn. Má přibýt jedna složka a změnit se tři soubory.
   **Kořenový `index.html` se měnit nesmí.**
4. Commit changes.
5. Cloudflare Pages nasadí do dvou minut.

---

## Kontrola po nasazení

Otevřete `https://cz.paulus.yoga/mapa-vnitrniho-sveta` v anonymním okně a
projděte:

- [ ] mapa se načte a je vidět všech pět kapitol
- [ ] klepnutí na kapitolu spustí animaci přesunu obrazu
- [ ] rozbalí se dvanáct konceptů
- [ ] z konceptu jde návrat zpět do kapitoly
- [ ] přepínač Světlý přepne motiv a zpět
- [ ] tlačítko Zvětšit funguje
- [ ] logo v liště vede na `www.paulus.yoga`
- [ ] na mobilu se nedá posouvat do stran
- [ ] favikona je stejná jako u ostatních stránek

A hlavně ověřte, že se nerozbily ostatní stránky:

- [ ] `cz.paulus.yoga/` portálová stránka vypadá stejně jako předtím
- [ ] `cz.paulus.yoga/co-je-stin` a `cz.paulus.yoga/co-je-meditace` fungují

---

## Náhled odkazu

Až budete adresu posílat účastníkům, projeďte ji nejdřív přes
[Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) a
klikněte na Scrape Again. Facebook si jinak uloží starý nebo prázdný náhled a
drží ho několik dní.

Pro LinkedIn totéž přes [Post Inspector](https://www.linkedin.com/post-inspector/).

---

## Poznámka k měření

Stránka posílá data do GTM `GTM-W7CCFJW` stejně jako ostatní. Vlastní události
uvnitř aplikace nastavené nejsou. Až budete chtít vědět, které kapitoly lidé
otevírají, dá se to doplnit, ale je to zásah do aplikace a chtěl jste do ní
nesahat.

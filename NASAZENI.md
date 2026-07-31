# Nasazení stránky Příběh

Cíl: `https://cz.paulus.yoga/pribeh`

Statické soubory, žádný build. Podia se nikde nedotýká a www.paulus.yoga zůstává beze změny.

---

## 1. Repozitář na GitHubu

Nový repozitář, například `paulus-cz`. Může být soukromý, Cloudflare si ho přečte.

Nahraj do něj obsah téhle složky tak, jak je. V kořeni repozitáře musí být `pribeh/`, `_headers`, `_redirects`, `robots.txt` a `sitemap.xml`.

Přes web GitHubu: **Add file → Upload files**, přetáhnout celou složku, dole **Commit changes**.

---

## 2. Projekt v Cloudflare Pages

Cloudflare → **Workers & Pages** → **Create** → záložka **Pages** → **Connect to Git**.

Vybrat repozitář a potvrdit. V nastavení buildu:

| Položka | Hodnota |
|---|---|
| Framework preset | None |
| Build command | nechat prázdné |
| Build output directory | `/` |
| Root directory | nechat prázdné |

**Save and Deploy.** První nasazení trvá zhruba minutu.

---

## 3. Doména

V projektu → **Custom domains** → **Set up a domain** → zadat `cz.paulus.yoga`.

Cloudflare si DNS záznam vytvoří sám, protože doména už je u něj. Záznam bude proxovaný, to je v pořádku, Podia je na jiném hostiteli a tenhle se jí netýká.

Certifikát naběhne do pár minut. Pak stránka běží na `https://cz.paulus.yoga/pribeh`.

Kořen `cz.paulus.yoga` přesměrovává na hlavní web, o to se stará soubor `_redirects`.

---

## 4. Kontrola po nasazení

- Otevřít `https://cz.paulus.yoga/pribeh` a projet celou stránku.
- Spustit obě videa. Když se neotevřou, viz bod 6.
- Spustit audio manifestu.
- Zkontrolovat, že se přehrává smyčka v hlavičce.
- V prohlížeči zobrazit zdroj a ověřit, že `canonical` ukazuje na `https://cz.paulus.yoga/pribeh`.

---

## 5. Analytika a vyhledávače

**GTM** je na stránce vložený, kontejner `GTM-W7CCFJW`. GA4, CookieScript a Organization Schema mají spouštěč All Pages, takže naběhnou samy. Nic se v GTM nastavovat nemusí.

**GA4.** Admin → Data Streams → vybrat stream → Configure tag settings → **Configure your domains**. Přidat `paulus.yoga` i `cz.paulus.yoga`. Bez toho se přechod z hlavního webu započítá jako nová návštěva z cizího zdroje.

**Search Console.** Přidat property typu **Doména** pro `paulus.yoga`, ne prefix. Ta pokrývá všechny podredomény, takže uvidíš `cz.paulus.yoga` ve stejném přehledu. Pak vložit `https://cz.paulus.yoga/sitemap.xml`.

**Sitemapa hlavního webu.** Do sitemap Workeru na paulus.yoga přidat odkaz na `https://cz.paulus.yoga/sitemap.xml`.

---

## 6. Vimeo

Videa jsou vložená jako plocha, která se rozklikne. Přehrávač se z Vimea stáhne až po kliknutí, takže se před tím nenačítá nic a neřeší se souhlas s cookies.

Vkládání máš ve Vimeu nastavené na Anywhere, takže není potřeba nic měnit.

**Náhledové snímky, nepovinné.** Před kliknutím se zobrazí značková plocha se zlatým tlačítkem. Když chceš místo ní vidět snímek z videa, stáhni ho z Vimea a ulož do složky `pribeh/assets` pod tímto názvem:

```
video-1214647698.jpg   Symbol a sjednocení
video-1214647697.jpg   Kdo jsme
```

Stránka si je najde sama. Když tam nebudou, zůstane čistá plocha a nic se nerozbije.

## 7. Prolinkování

Aby to Google i lidé brali jako jednu značku, musí na stránku vést odkaz z hlavního webu.

- V Podii přidat odkaz na Příběh do hlavní navigace nebo do patičky.
- Na stránce `/onas` přidat odkaz na `https://cz.paulus.yoga/pribeh`.

Zpětné odkazy z Příběhu na hlavní web už na stránce jsou. Logo v hlavičce, tři karty v rozcestníku a patnáct odkazů v patičce.

---

## 8. Další stránky

Struktura je připravená na to, aby jich bylo víc. Nová stránka znamená novou složku v kořeni repozitáře.

```
pribeh/index.html      → cz.paulus.yoga/pribeh
mapa/index.html        → cz.paulus.yoga/mapa
manifest/index.html    → cz.paulus.yoga/manifest
```

Do `sitemap.xml` přidat další `<url>` blok. Nic jiného se nemění.

---

## 9. Každá další úprava

Změnit soubor v repozitáři a udělat commit. Cloudflare nasadí do zhruba třiceti sekund. U textových oprav to jde přímo v prohlížeči na GitHubu, protože se nic nebuilduje.

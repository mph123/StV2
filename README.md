# Stórt verkefni 2 -- vefforritun 2017 -- Háskóli Íslands
Kennari: Ólafur Sverrir Kjartansson


## Almennt skipulag

Verkefnið samanstendur af tveimur html síðum: index.html og video.html.

Aðalsíðan, index.html inniheldur vídeó sem sótt eru úr videos.json. Videóunum er raðað í mismunandi flokka eftir því hvernig þau eru skráðar í videos.json.

Tilgangur Video.html er að spila myndbandsskrár. Þegar myndbandsskrá er valin á aðalsíðu opnast video.html. Þar er hægt að horfa á valið myndband.

Html síðurnar eru unnar með Java Script.

Html síðurnar eru stílaðar með styles.css.

Notast var við grind til að aðstoða við uppsetningu. Slökkt hefur verið á grindinni en hana er hægt að virkja með því að setja class="grid" á html elementið.

## Skipulag Java Script

script.js   ->  Javascript fyrir index.html.

spilari.js  ->  Javascript fyrir video.html.

## Skipulag CSS (sass)

styles.css - Er aðalskrá css (stílar: index.html, video.html).

Hún er þýdd úr SASS skránni styles.scss

styles.scss importar eftirfarandi skrám úr undirmöppunni: /scss

heading.scss  ->   Stílar fyrirsagnir.

Video.scss    ->   Stílar kaupa.html.

Index.scss    ->   Stílar index.html


## Keyrsla
Ef skoða á aðalsíður er nóg að opna index.html. Þar er hægt að velja myndband sem opnast í video.html þar sem hægt er að horfa á myndbandið.


Ef keyra á verkefnið staðbundið þarf að afrita repository og installa note.js og keyra þýðanda til að stílar verkefnis virki.
https://nodejs.org/en/

## Höfundar verkefnis

Hilmar Örn Egilsson, hoe5@hi.is og Magnús Páll Haraldsson, mph1@hi.is.

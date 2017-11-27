# Stórt verkefni 2 -- vefforritun 2017 -- Háskóli Íslands
Kennari: Ólafur Sverrir Kjartansson


## Almennt skipulag

Verkefnið samanstendur af tveimur html síðum: index.html og video.html.

Aðalsíðan, index.html inniheldur vídeó sem sótt eru úr videos.json. Síðan er búin til dýnamískt eftir fjöldi vídjóa og flokka í videos.json. Ef nýju vídjói eða nýjum flokk er bætt við videos.json þá birtist það sjálfkrafa. (Villu-meðhöndlun: Ef videos.json finnst ekki þá koma upp villuskilaboð).

Tilgangur Video.html er að spila myndbandsskrár. Þegar myndbandsskrá er valin á aðalsíðu opnast video.html. Þar er hægt að horfa á valið myndband. (Villu-meðhöndlun: ef id sem kemur með slóð er ekki til birtast villuskilaboð).

Efni á Html síðum er að mestu sett inn með javascript.

Html síðurnar eru stílaðar með styles.css.

Notast var við grind til að aðstoða við uppsetningu. Slökkt hefur verið á grindinni en hana er hægt að virkja með því að setja class="grid" á html elementið.

## Skipulag Java Script

script.js transpilað með babel í 'script-compiled.js' sem inniheldur virkni fyrir index.html

spilari.js transpilað með babel í 'spilari-compiled.js' sem inniheldur virkni fyrir video.html

## Skipulag CSS (sass)

styles.css - Er aðalskrá css (stílar: index.html, video.html).

Hún er þýdd úr SASS skránni styles.scss

styles.scss importar eftirfarandi skrám úr undirmöppunni: /scss

heading.scss  ->   Stílar fyrirsagnir.

video.scss    ->   Stílar fyrir video.html

index.scss    ->   Stílar index.html


## Keyrsla
Ef skoða á aðalsíður er nóg að opna index.html. Þar er hægt að velja myndband sem opnast í video.html þar sem hægt er að horfa á myndbandið.

Package.json inniheldur upplýsingar um pakka sem notaðir eru til að keyra verkefnið.

Ef keyra á verkefnið staðbundið þarf að afrita repository og installa note.js og keyra þýðanda til að stílar verkefnis virki.
https://nodejs.org/en/

## Höfundar verkefnis

Hilmar Örn Egilsson, hoe5@hi.is og Magnús Páll Haraldsson, mph1@hi.is.

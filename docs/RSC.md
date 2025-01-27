# Rendering life cycle i Next.js

Grovt overordnet, så vil Next.js med app dir gjøre 3 steg.

1. Kjøre React Server Components (RSC) på serveren
2. Kjøre klient-komponenter på serveren og pakke disse inn i HTML med tilhørende props
3. Kjøre klient-komponenter på klienten og hydrere med initielle props fra serveren

[Eksempel](../demos/rendering)


## 1. React Server Components (RSC) på serveren

Dersom man er kjent med "pages" routeren kan dette på mange måter minnes om en getServerSideProps som i tillegg
kan returnere React-komponenter.

Ingen av kode som blir kjørt her vil påvirke klient-bundlen, og man har tilgang til headers, cookies og andre server-side
secrets.

## 2. Klient-komponenter kjøres på serveren

Dette steget er helt likt som i pages dir, etter getServerSideProps er kjørt, så vil React-komponentene kjøres på serveren
og pakkes inn i HTML. Dette er den klassiske "SSR" (Server Side Rendering).

Her gjelder de samme reglene som andre rammeverker som SSR-er. Som for eksempel at hooks er ikke tilgjengelig, og 
`window` er `undefined`.

I motsetning til pages dir, er det som bestemmer om en komponent går fra RSC til klient-komponent, er om en komponent
er markert med `"use client"` i toppen av filen. Alle komponenter under første `"use client"` vil også automatisk bli 
klient-komponenter.

## 3. Klient-komponenter kjøres på klienten

Dette er også likt som før. Etter all JavaScript er lasted ned, kompilert og kjørt, så vil React begynne hydreringen sin,
men i motsetning til en SPA så vil den prøve å bruke initielle props som ble sendt fra serveren, og forventer at shadow-DOM-en
ser helt lik ut. Dersom den ikke er lik, møter man på såkalte "hydration mismatches" eller "hydration errors".

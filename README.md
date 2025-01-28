# next-demos

Disse demoene dekker kun App Dir.

Hva vi skal dekke:

* [Next.js sin rendering flyt](docs/RSC.md) ([eksempel](demos/rendering))
  * Docs:
    * [Rendring](https://nextjs.org/docs/app/building-your-application/rendering)
    * [Komposisjon](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
* Dockerisering av Next.js ([eksempel](demos/standalone))
  * Docs:
    * [Docker](https://nextjs.org/docs/app/building-your-application/deploying#docker-image)
* [Bruk av Next.js med CDN](docs/CDN.md) ([eksempel](demos/asset-prefix))
  * Docs:
    * [Asset Prefix](https://nextjs.org/docs/app/api-reference/config/next-config-js/assetPrefix)
* Bruk Next.js som en "SPA", dropp Express-serveren ([eksempel](demos/spa-ish))
  * Docs:
    * [Single Page App](https://nextjs.org/docs/app/building-your-application/upgrading/single-page-applications)
* Server actions, det er fali det ([eksempel](demos/danger-actions))
  * Docs:
    * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
* Logging i Next.js server ([eksempel](demos/logging))
  * Biblioteker:
    * [next-logger](https://www.npmjs.com/package/next-logger) (brukt i eksempelet)
    * [@navikt/next-logger](https://github.com/navikt/next-logger) (for inspirasjon)
* Deployment og Github Actions ([eksempel (ekstern)](https://github.com/navikt/teamsykmelding-github-actions-workflows/blob/main/.github/workflows/next-app.yaml#L60-L78))
* Miljøvariabler, klient og server ([eksempel (ekstern)](https://github.com/navikt/syk-dig/blob/main/src/utils/env.ts))
  * Docs:
    * [Miljøvariabler i server](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
    * [Miljøvariabler i browser](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser)
* API Routes
  * Docs:
    * [API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
  * Biblioteker:
    * [@navikt/next-api-proxy](https://github.com/navikt/next-api-proxy) (for inspirasjon)
* Middlewares
  * Docs:
    * [Middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware)
* Migrering fra SPA til Next in one simple trick ([eksempel (ekstern)](https://github.com/navikt/ditt-sykefravaer/blob/88e52fceacf74bda016f3c7abde7679ddf15f2a6/src/pages/%5B%5B...app%5D%5D.tsx))

Bonus:

* Over-engineer mock
  data ([eksempel (ekstern)](https://github.com/navikt/sykmeldinger/blob/main/src/server/graphql/mock-db/index.ts))
* Raske Playwright tester i Github Actions ([eksempel (ekstern)](https://github.com/navikt/syk-dig/blob/main/.github/workflows/deploy.yaml#L19-L75))
* Skript opp avhengigheter ([eksempel (ekstern)](https://github.com/navikt/syk-inn/tree/main/scripts))

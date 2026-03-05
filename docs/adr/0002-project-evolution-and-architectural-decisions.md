# ADR 0002: Evolucion del proyecto y decisiones arquitectonicas

## Status

Accepted

## Context

El repositorio solo expone un commit (`Initial commit`), por lo que no existe historial suficiente para reconstruir una cronologia exacta de cambios.

Por eso esta ADR no intenta narrar una historia Git inexistente. En cambio, documenta la arquitectura vigente confirmada en el workspace Nx actual.

Proyectos activos verificados:

- aplicaciones: `shell`, `legacy-remote`, `modern-remote`;
- end-to-end: `shell-e2e`, `modern-remote-e2e`;
- librerias: `domain`, `core`, `http`, `legacy`, `gov`.

El estado actual del monorepo muestra decisiones tecnicas claras:

- el punto de entrada es `shell`;
- la experiencia de negocio se divide entre `legacy-remote` y `modern-remote`;
- el dominio esta aislado en librerias compartidas;
- el acceso a datos legacy esta encapsulado en facades, clients y mappers;
- la variante moderna usa `@ngrx/signals`;
- el entorno local y las pruebas se apoyan en un mock server determinista.

Esta ADR documenta esas decisiones como fotografia oficial del proyecto actual.

## Decision

Se formalizan las siguientes decisiones del proyecto.

### 1. Monorepo Nx como base organizacional

El proyecto se organiza como un workspace Nx para separar aplicaciones, librerias compartidas, pruebas end-to-end y tooling.

Cambios visibles:

- `apps/shell`, `apps/legacy` y `apps/modern` son las aplicaciones registradas en Nx.
- `apps/shell-e2e` y `apps/modern-e2e` cubren la capa E2E.
- `libs/core`, `libs/core/http`, `libs/data-access/legacy`, `libs/data-access/gov` y `libs/src` centralizan piezas reutilizables.
- `nx.json` y `.github/workflows/ci.yml` estandarizan lint, test y build sobre el workspace.

Decision:

- mantener una estructura por apps y libs para permitir migracion incremental, aislamiento de responsabilidades y ejecucion selectiva con Nx;
- ejecutar CI con `npx nx run-many -t lint test build` para validar el workspace completo en cada cambio relevante.

### 2. Shell como punto de entrada y microfrontends como unidad de composicion

El proyecto actual organiza la experiencia mediante un host y dos remotos funcionales.

Cambios visibles:

- `apps/shell/src/app/app.routes.ts` delega navegacion a `legacy-remote` y `modern-remote`.
- `apps/shell/public/federation.manifest.json` registra ambos remotos.
- `package.json` incluye `start:mfes` para levantar shell y remotos juntos.
- cada remote mantiene sus propias rutas de `citizens`, `permits` y `applications`.

Decision:

- adoptar `@angular-architects/native-federation` para ejecutar legacy y modern lado a lado;
- usar `shell` como punto de entrada unico para navegacion y orquestacion;
- separar la implementacion por remotos para permitir evolucion independiente.

### 3. Coexistencia explicita de experiencia legacy y moderna

La migracion no solo ocurre a nivel interno; tambien se hace visible en la UI para validar que ambos enfoques mantengan el mismo flujo.

Cambios visibles:

- `apps/legacy/src/app/citizens/citizens-list.page.ts` expone un selector `Source`.
- `apps/modern/src/app/citizens/citizens-list.ts` mantiene el mismo selector y cambia entre `/legacy/...` y `/modern/...`.
- `apps/shell-e2e/src/mfes-navigation.spec.ts` valida deep links y preservacion de query params durante el cambio de fuente.

Decision:

- permitir el cambio de origen desde la interfaz para comparar implementaciones sin perder ruta ni contexto;
- usar la URL como contrato de navegacion para mantener deep links estables entre arquitecturas.

### 4. Dominio aislado del backend legacy

El proyecto evita que la UI dependa directamente de DTOs del backend legacy.

Cambios visibles:

- `docs/adr/0001-data-access-anti-corruption-layer.md` formaliza el anti-corruption layer;
- `libs/src` define modelos de dominio (`Citizen`, `Permit`, `Application`);
- `libs/data-access/legacy` encapsula DTOs, API clients, mappers y facades;
- la UI consume `@gov/domain` y servicios de acceso, no shapes HTTP crudos.

Decision:

- preservar el dominio como contrato estable entre UI y fuentes de datos;
- encapsular variaciones del backend en `data-access/legacy`;
- mantener abierta la posibilidad de cambiar la fuente de datos sin reescribir pantallas.

### 5. Dos estrategias de estado para comparar presente y futuro

La base actual mantiene dos estilos de manejo de estado porque la migracion tambien evalua el enfoque tecnico.

Cambios visibles:

- `libs/data-access/legacy/src/lib/citizens.facade.ts` implementa estado con `signal`, `effect` y suscripcion directa al API client legacy;
- `libs/data-access/gov/src/lib/citizens.store.ts` implementa estado con `signalStore`, `withState`, `withComputed` y `rxMethod`;
- la vista legacy consume facades; la moderna consume stores.

Decision:

- conservar facades para la ruta legacy por simplicidad y estabilidad;
- usar `@ngrx/signals` en la ruta moderna como objetivo de modernizacion;
- permitir comparacion funcional entre ambos enfoques antes de consolidar uno solo.

Nota:

- hoy la implementacion "modern" todavia reutiliza `LegacyCitizensApiClient` y `mapLegacyCitizen`, asi que la modernizacion actual es de manejo de estado y composicion de UI, no aun de backend.

### 6. Angular moderno como estandar de implementacion

La base del proyecto adopta APIs modernas de Angular para las nuevas pantallas y para la arquitectura federada.

Cambios visibles:

- `provideZonelessChangeDetection()` en configuraciones de app;
- componentes standalone y lazy loading por `loadComponent` / `loadChildren`;
- `ChangeDetectionStrategy.OnPush` en pantallas clave;
- control flow moderno con `@if` y `@for`.

Decision:

- estandarizar Angular moderno para reducir costo de cambio futuro;
- favorecer rendering predecible y menor acoplamiento a Zone.js;
- usar lazy loading y federacion para aislar despliegue y carga por dominio.

### 7. Infraestructura local con backend falso determinista

El proyecto necesita una fuente de datos reproducible para desarrollo y pruebas mientras el backend real evoluciona.

Cambios visibles:

- `tools/mock-api/generate-db.ts` genera datos con seed fija;
- `package.json` define `dev:db`, `dev:api` y `dev:mock`;
- `proxy.conf.json` traduce `/api` hacia `http://localhost:3001`.

Decision:

- usar `json-server` y una base generada deterministicamente para desacoplar frontend y backend;
- mantener el contrato HTTP accesible mediante `/api` para no propagar detalles del entorno local a la UI;
- facilitar debugging y ejecucion de pruebas con datos consistentes.

### 8. Estrategia de testing por capas

Las pruebas no se concentran en un unico nivel.

Cambios visibles:

- `legacy` expone target `test` y concentra tests unitarios de la capa legacy;
- `shell`, `legacy-remote` y `modern-remote` exponen target `test`;
- `shell-e2e` y `modern-remote-e2e` exponen target `e2e`;
- CI ejecuta `lint`, `test` y `build`.

Decision:

- cubrir transformaciones criticas cerca de la capa de datos;
- validar navegacion y flujos integrados en navegador;
- usar el workspace como unidad de calidad en CI.

### 9. Estrategia de despliegue estatico en GitHub Pages sin proxy runtime

GitHub Pages no provee proxy en tiempo de ejecucion. Por lo tanto, una estrategia basada en `proxy.conf.json` funciona en local pero no en produccion estaticamente alojada.

Cambios visibles:

- `libs/data-access/legacy/*api.client.ts` consume rutas relativas (`api/...`) para respetar `base href` del documento.
- `.github/workflows/deploy.yml` parchea `base href` por repo, ajusta `federation.manifest.json` y publica `404.html` para fallback SPA.
- `.github/workflows/deploy.yml` genera `tools/mock-api/db.json` y exporta `out/api/*` como mock API estatica para Pages.
- `.github/workflows/ci.yml` genera `db.json` en el job `build` para asegurar artefactos deterministas en pipeline.

Decision:

- mantener `proxy.conf.json` unicamente para desarrollo local;
- resolver consultas de datos en Pages mediante archivos estaticos bajo `/<repo>/api/*` cuando no exista backend publico;
- conservar la misma app shell/remotes para local y Pages, variando solo `base href` y fuente de datos en runtime estatico.

## Consequences

- Legacy y modern conviven dentro del mismo host.
- El dominio queda protegido frente a cambios del backend legacy.
- El shell permite comparar arquitecturas reales usando la misma navegacion.
- El costo operativo aumenta: hay mas apps, mas configuracion y mas superficies de prueba.
- La version modern todavia depende del backend legacy, por lo que la separacion backend moderno sigue pendiente.
- La cobertura automatizada existe, pero hoy esta mas madura en `legacy` y `shell-e2e` que en `gov` o `modern-remote-e2e`.
- Se agrega costo de mantenimiento del empaquetado estatico de API para Pages, a cambio de despliegues reproducibles sin dependencia de proxy.

## Scope And Limits

- Esta ADR documenta decisiones confirmadas por el estado actual del codigo.
- No representa una cronologia historica exacta porque el repositorio no conserva esa granularidad en Git.
- Si el equipo quiere trazabilidad fina por feature, conviene crear ADRs adicionales por tema:
  - federacion y shell;
  - estrategia de estado moderna con `@ngrx/signals`;
  - mock API y contrato de desarrollo;
  - estrategia de testing y CI.

## Notes

- ADR 0001 sigue siendo la decision fundacional para el aislamiento del dominio.
- ADR 0002 documenta la arquitectura vigente del workspace: shell federado, convivencia legacy/modern y soporte operativo para desarrollo y pruebas.

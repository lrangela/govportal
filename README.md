# GovPortal Frontend

Monorepo Nx con Angular 21 orientado a una arquitectura de microfrontends con `shell`, `legacy-remote` y `modern-remote`.

## Despliegue en GitHub Pages

URL de despliegue (patron de este repo):

- `https://<OWNER>.github.io/govportal/`

El workflow de deploy (`.github/workflows/deploy.yml`) publica en Pages tras CI exitoso y ajusta:

- `base href` para `/govportal/`.
- `federation.manifest.json` para cargar remotes locales del artifact (`./legacy/remoteEntry.json` y `./modern/remoteEntry.json`).
- `404.html` para fallback de rutas SPA en refresh/deep-link.
- `out/api/*` con datos mock estaticos generados desde `tools/mock-api/db.json`.
## Workspace actual

Proyectos Nx verificados hoy:

- Aplicaciones: `shell`, `legacy-remote`, `modern-remote`
- E2E: `shell-e2e`, `modern-remote-e2e`
- Librerias: `domain`, `core`, `http`, `legacy`, `gov`

La entrada principal del sistema es `shell`. El host monta dos remotes:

- `/legacy/*` -> `legacy-remote`
- `/modern/*` -> `modern-remote`

## Arquitectura

### Flujo de alto nivel

```text
shell
  -> legacy-remote
  -> modern-remote

legacy-remote / modern-remote
  -> data-access
  -> /api/*
  -> json-server mock API
```

### Capas

- `apps/shell`
  - Host de microfrontends con Native Federation.
  - Redirige `/` a `/legacy`.
- `apps/legacy`
  - Remote basado en facades y API clients legacy.
- `apps/modern`
  - Remote basado en stores con `@ngrx/signals`.
  - Hoy sigue consumiendo datos a traves de clients legacy y mappers compartidos.
- `libs/src`
  - Dominio compartido expuesto como `@gov/domain`.
- `libs/data-access/legacy`
  - DTOs, API clients, mappers y facades.
- `libs/data-access/gov`
  - Stores para la UI moderna.
- `libs/core`
  - Componentes reutilizables como `PageHeaderComponent`.
- `libs/core/http`
  - Infraestructura HTTP compartida.

## Rutas activas

Rutas del host:

- `/legacy/citizens`
- `/legacy/citizens/:id`
- `/legacy/permits`
- `/legacy/applications`
- `/modern/citizens`
- `/modern/citizens/:id`
- `/modern/permits`
- `/modern/applications`

Comportamiento verificado en codigo:

- El `shell` carga remotos con `loadRemoteModule`.
- La raiz `/` redirige a `/legacy`.
- `legacy` y `modern` exponen el selector `Source` para cambiar entre arquitecturas.
- El cambio de `Source` conserva subruta y query params.
- Ambos remotes tienen lista y detalle de ciudadanos.
- El detalle moderno agrega enlaces a `permits` y `applications` usando query params.

## Datos y ACL

La UI no consume DTOs legacy directamente.

- `libs/data-access/legacy` encapsula `Legacy*ApiClient`, DTOs y mappers.
- `legacy-remote` consume facades como `CitizensFacade`.
- `modern-remote` consume stores como `CitizensStore`.
- `CitizensStore` todavia usa `LegacyCitizensApiClient` y `mapLegacyCitizen`, asi que la separacion de backend moderno aun esta pendiente.

ADR relacionadas:

- [ADR 0001](docs/adr/0001-data-access-anti-corruption-layer.md)
- [ADR 0002](docs/adr/0002-project-evolution-and-architectural-decisions.md)

## Como correr el proyecto

### Requisitos

- Node.js 20+
- npm

### Instalacion

```bash
npm install
```

### Mock API

```bash
npm run dev:mock
```

O por separado:

```bash
npm run dev:db
npm run dev:api
```

La API mock escucha en `http://localhost:3001` y `proxy.conf.json` reescribe `/api` hacia ese host (solo para desarrollo local con `serve`).

### Microfrontends

```bash
npm run start:mfes
```

Puertos esperados:

- `shell`: `http://localhost:4200`
- `legacy-remote`: `http://localhost:4201`
- `modern-remote`: `http://localhost:4202`

Flujo recomendado:

Terminal 1:

```bash
npm run dev:mock
```

Terminal 2:

```bash
npm run start:mfes
```

Luego abre `http://localhost:4200`.

## Targets utiles

Ejemplos verificados con Nx:

```bash
npx nx show projects --json
npx nx run shell:serve
npx nx run legacy-remote:serve
npx nx run modern-remote:serve
npx nx test legacy
npx nx e2e shell-e2e
npx nx e2e modern-remote-e2e
```

## Testing

Cobertura verificada hoy:

- `legacy` tiene target `test` con Vitest.
- `shell`, `legacy-remote` y `modern-remote` tienen target `test` con Vitest.
- `shell-e2e` y `modern-remote-e2e` tienen target `e2e` con Playwright.

Limitaciones actuales observables:

- `gov` no expone target `test`.
- `modern-remote-e2e` solo contiene el spec inicial `src/example.spec.ts`.
- `shell-e2e` contiene el escenario mas representativo hoy: navegacion entre MFEs y cambio de `Source`.

## Convenciones tecnicas vigentes

- Angular standalone components.
- `ChangeDetectionStrategy.OnPush` en pantallas principales.
- Control flow moderno con `@if` y `@for`.
- Native Federation con `@angular-architects/native-federation`.
- Estado legacy con `signals` + `effect`.
- Estado moderno con `@ngrx/signals` + `rxMethod`.
- `/api/*` como contrato de acceso a datos para desarrollo local.

## Proxy local vs CI/CD (GitHub Pages)

`proxy.conf.json` solo existe en `nx serve`/dev-server. En GitHub Pages (hosting estatico) no hay proxy runtime, por eso no debe dependerse de proxy en runtime.

Implementacion actual:

1. El frontend consume endpoints relativos (`api/citizens`, `api/permits`, `api/applications`) para respetar el `base href`.
2. En local, con `<base href="/">`, esas URLs resuelven a `/api/*` y funcionan con `proxy.conf.json`.
3. En Pages, con `<base href="/govportal/">`, esas URLs resuelven a `/govportal/api/*`.
4. El deploy genera `db.json` de forma determinista y exporta API mock estatica en `out/api/*`.
5. El deploy copia `out/index.html` como `out/404.html` para evitar errores de URL no encontrada en rutas SPA.

## CI/CD

Puntos relevantes de pipeline:

1. CI (`.github/workflows/ci.yml`) ejecuta `npx tsx tools/mock-api/generate-db.ts` en el job `build`.
2. E2E en CI vuelve a generar `db.json`, levanta `json-server` y valida navegacion real entre shell/remotes.
3. Deploy (`.github/workflows/deploy.yml`) genera `db.json`, construye apps y publica Pages con remotos + API mock estatica.
## Troubleshooting

### 1) `Port 4200`, `4201` o `4202` ocupado

- Cierra procesos previos.
- O ajusta los puertos en los targets `serve-original`.

### 2) `/api/*` falla o no hay datos

- Verifica `http://localhost:3001`.
- Regenera la base mock:

```bash
npm run dev:db
```

### 3) Error de rutas en el host

Las rutas de negocio viven bajo prefijo:

- `/legacy/...`
- `/modern/...`

### 4) Cambios en el mock no se reflejan

- Regenera `tools/mock-api/db.json`.
- Reinicia `json-server`.

## Scripts disponibles

```bash
npm run dev:db
npm run dev:api
npm run dev:mock
npm run start:mfes
```



## Optimizacion de red y Troubleshooting

Se han aplicado medidas para reducir el consumo inesperado de ancho de banda detectado durante el desarrollo:

1. **Telemetria**: Se ha desactivado globalmente la telemetria de Angular (\
g analytics disable\).
2. **Native Federation**: Se han fijado los rangos de versiones (\~21.1.0\, \~7.8.0\) en \ederation.config.js\ para evitar consultas automáticas al registro de npm durante el build.
3. **Nx Console**: Si se percibe lentitud o descarga de binarios, se recomienda desactivar las actualizaciones automáticas de la extensión de Nx en el IDE.
4. **GitHub CLI**: Se recomienda instalar el binario \gh\ o deshabilitar extensiones que lo invoquen para evitar errores recurrentes en logs.

Para mas detalles, ver [ADR 0003: Optimizacion del consumo de red y estabilidad del build](docs/adr/0003-optimization-of-network-usage-and-build-stability.md).

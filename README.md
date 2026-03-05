# GovPortal

**CI GitHub Pages**

**URL:** https://lrangela.github.io/govportal/

English and Spanish documentation for the current Nx workspace. Documentación en inglés y español para el workspace actual de Nx.

---

## English

### Overview

GovPortal is a multi-application Angular workspace built with Nx and Native Federation. It contains a main shell application that orchestrates two remote micro-frontends (legacy and modern) demonstrating incremental migration strategies and module federation patterns.

**Project routes:**

- **Repository:** https://github.com/lrangela/govportal
- **Deployment:** https://lrangela.github.io/govportal/

**System split and route examples:**

**Shell Application (main entry point):**
- Local: `http://localhost:4200/`
- Deployed: https://lrangela.github.io/govportal/

**Legacy Remote (micro-frontend):**
- Local: `http://localhost:4201/`
- Deployed: https://lrangela.github.io/govportal/legacy/

**Modern Remote (micro-frontend):**
- Local: `http://localhost:4202/`
- Deployed: https://lrangela.github.io/govportal/modern/

The repository is structured as a frontend architecture demo focused on:

- Angular 21 standalone applications with zoneless change detection.
- Nx 22 workspace with project boundaries and affected pipelines.
- Native Federation for module federation and micro-frontend composition.
- Signal-first state management with `@ngrx/signals` in key domains.
- Hash-based routing for GitHub Pages compatibility.
- CI/CD automation for lint, test, build, and GitHub Pages deployment.

### Current Workspace Structure

```
govportal/
├── apps/
│   ├── shell              # Main shell application (host)
│   ├── shell-e2e          # E2E tests for shell
│   ├── legacy             # Legacy remote micro-frontend
│   ├── modern             # Modern remote micro-frontend
│   └── modern-e2e         # E2E tests for modern
├── libs/
│   ├── core/              # Core utilities and HTTP configuration
│   │   ├── http           # HTTP client setup and interceptors
│   │   └── src            # Core shared code
│   ├── data-access/       # Domain state and API integration
│   │   ├── gov            # Government/domain data access
│   │   └── legacy         # Legacy system data adapters
│   └── src                # Shared library source
├── tools/
│   └── mock-api/          # Mock API generation and export scripts
├── docs/
│   └── adr/               # Architecture Decision Records
└── .github/workflows/     # CI/CD pipeline definitions
```

### Architecture Notes

- All apps bootstrap with `provideZonelessChangeDetection()` for optimal performance.
- Modern Angular APIs are standard: `OnPush`, Signal `input()`/`output()`, and `@defer` blocks for rendering optimization.
- Routing uses `withHashLocation()` for GitHub Pages static hosting compatibility.
- Shell application acts as the host, loading `legacy` and `modern` remotes via Native Federation.
- `libs/core/*` owns HTTP configuration, interceptors, and cross-cutting concerns.
- `libs/data-access/*` owns API integration, parsing, storage, and state updates using signals.
- Remote applications demonstrate different implementation approaches (legacy vs modern patterns).
- Mock API with `json-server` provides realistic demo data for development and testing.

### Tooling Status

Testing and verification are standardized across the entire workspace.

- All projects use **Vitest** with project-level `vitest.config.ts`.
- End-to-end coverage uses **Playwright** with one root config and one logical project per app.
- `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` are valid workspace-level checks.
- `npm run e2e` validates the shell and remote applications navigation flows.
- CI runs affected targets on pull requests and full workspace verification on push/workflow dispatch.
- No Jest dependencies remain in the workspace.
- `shell`, `legacy`, and `modern` all build successfully for production.

### Tech Stack

| Area | Current choice |
|------|----------------|
| Frontend | Angular 21 |
| Workspace | Nx 22 |
| Module Federation | Native Federation |
| Styling | SCSS |
| State | Angular signals + `@ngrx/signals` |
| Testing | Vitest (jsdom) |
| E2E | Playwright |
| CI/CD | GitHub Actions |
| Deployment | GitHub Pages |

### Local Development

```bash
# Install dependencies
npm install

# Type checking
npm run typecheck

# Linting
npm run lint

# Unit tests
npm run test

# Build all projects
npm run build

# E2E tests (requires running apps)
npm run e2e

# Serve all MFEs together
npm run start:mfes

# Or serve individually
npx nx serve shell
npx nx serve legacy
npx nx serve modern

# Start mock API
npm run dev:mock
```

**Environment variants currently used by all apps:**

- `development` - Local development with proxy to mock API.
- `production` - GitHub Pages deployment with hash routing.

**Mock API Setup:**

The project uses `json-server` with a generated database for demo data:

```bash
# Generate mock database
npm run dev:db

# Start mock API server (port 3001)
npm run dev:api

# Or both in sequence
npm run dev:mock
```

### Demo Access For GitHub Pages

The published demo exposes sample citizen data and government procedures for portfolio demonstration.

**Sample data includes:**

- Citizen records with permit applications.
- Regional government procedures (AREQUIPA, LIMA, etc.).
- Application status tracking (draft, submitted, under_review, completed).
- Permit management (transport, business, construction).

### CI/CD

**`.github/workflows/ci.yml`**

- Runs on `push` to `main`, `pull_request`, and manual `workflow_dispatch`.
- Executes `npm install --legacy-peer-deps` for dependency resolution.
- Generates mock database for build-time integration.
- Runs `lint` in parallel across shell, legacy, and modern projects.
- Runs `test` with Vitest across all data-access and feature libraries.
- Runs `build` for all three applications with production configuration.
- Stages combined artifact with proper base-href patching for GitHub Pages.
- Exports mock API data to static JSON for client-side consumption.
- Deploys to GitHub Pages with automatic manifest federation.

### Documentation

- **Docs index:** `./docs/`
- **Architecture Decision Records:** `./docs/adr/`

### Known Gaps

- Mock API is a demo backend and not a production-owned service.
- Static deployment uses hash routing which changes URL structure (`/#/route`).
- Observability and release governance are still pending.
- E2E depends on mock API availability and deterministic data generation.
- Native Federation configuration requires careful version alignment across remotes.

---

## Español

### Resumen

GovPortal es un workspace de Angular multi-aplicación construido con Nx y Native Federation. Incluye una aplicación shell principal que orquesta dos micro-frontends remotos (legacy y modern) demostrando estrategias de migración incremental y patrones de federación de módulos.

**Rutas del proyecto:**

- **Repositorio:** https://github.com/lrangela/govportal
- **Despliegue:** https://lrangela.github.io/govportal/

**División de sistemas y ejemplos de rutas:**

**Aplicación Shell (punto de entrada principal):**
- Local: `http://localhost:4200/`
- Desplegado: https://lrangela.github.io/govportal/

**Legacy Remote (micro-frontend):**
- Local: `http://localhost:4201/`
- Desplegado: https://lrangela.github.io/govportal/legacy/

**Modern Remote (micro-frontend):**
- Local: `http://localhost:4202/`
- Desplegado: https://lrangela.github.io/govportal/modern/

El repositorio está orientado a mostrar una arquitectura frontend con foco en:

- Aplicaciones Angular 21 standalone con zoneless change detection.
- Workspace Nx 22 con límites de proyecto y pipelines affected.
- Native Federation para federación de módulos y composición de micro-frontends.
- Estado basado en signals con `@ngrx/signals` en dominios clave.
- Routing basado en hash para compatibilidad con GitHub Pages.
- Automatización de CI/CD para lint, test, build y despliegue a GitHub Pages.

### Estructura Actual

```
govportal/
├── apps/
│   ├── shell              # Aplicación shell principal (host)
│   ├── shell-e2e          # Tests E2E para shell
│   ├── legacy             # Micro-frontend legacy remoto
│   ├── modern             # Micro-frontend moderno remoto
│   └── modern-e2e         # Tests E2E para modern
├── libs/
│   ├── core/              # Utilidades core y configuración HTTP
│   │   ├── http           # Setup de HTTP e interceptores
│   │   └── src            # Código core compartido
│   ├── data-access/       # Estado de dominio e integración API
│   │   ├── gov            # Data access de dominio gubernamental
│   │   └── legacy         # Adaptadores de sistema legacy
│   └── src                # Código fuente de librerías compartidas
├── tools/
│   └── mock-api/          # Scripts de generación y export de API mock
├── docs/
│   └── adr/               # Architecture Decision Records
└── .github/workflows/     # Definiciones de pipelines CI/CD
```

### Notas de Arquitectura

- Todas las apps arrancan con `provideZonelessChangeDetection()` para rendimiento óptimo.
- Se utilizan APIs modernas de Angular como estándar: `OnPush`, Signal `input()`/`output()`, y bloques `@defer` para optimización de renderizado.
- El routing usa `withHashLocation()` para compatibilidad con hosting estático de GitHub Pages.
- La aplicación shell actúa como host, cargando los remotos `legacy` y `modern` vía Native Federation.
- `libs/core/*` concentra configuración HTTP, interceptores y preocupaciones transversales.
- `libs/data-access/*` concentra integración API, parseo, almacenamiento y actualización de estado usando signals.
- Las aplicaciones remotas demuestran diferentes enfoques de implementación (patrones legacy vs modernos).
- Mock API con `json-server` provee datos demo realistas para desarrollo y testing.

### Estado Actual del Tooling

Testing y verificación quedaron estandarizados en todo el workspace.

- Todos los proyectos usan **Vitest** con `vitest.config.ts` a nivel de proyecto.
- La cobertura end-to-end usa **Playwright** con una configuración raíz y un proyecto lógico por app.
- `npm run typecheck`, `npm run lint`, `npm run test` y `npm run build` sirven como chequeos de workspace completo.
- `npm run e2e` valida los flujos de navegación de shell y aplicaciones remotas.
- El CI ejecuta affected en pull requests y verificación completa del workspace en push/manual.
- No quedan dependencias de Jest en el workspace.
- `shell`, `legacy` y `modern` compilan correctamente para producción.

### Stack Tecnológico

| Área | Elección actual |
|------|-----------------|
| Frontend | Angular 21 |
| Workspace | Nx 22 |
| Module Federation | Native Federation |
| Estilos | SCSS |
| Estado | Angular signals + `@ngrx/signals` |
| Testing | Vitest (jsdom) |
| E2E | Playwright |
| CI/CD | GitHub Actions |
| Despliegue | GitHub Pages |

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Verificación de tipos
npm run typecheck

# Linting
npm run lint

# Tests unitarios
npm run test

# Build de todos los proyectos
npm run build

# Tests E2E (requiere apps corriendo)
npm run e2e

# Servir todos los MFEs juntos
npm run start:mfes

# O servir individualmente
npx nx serve shell
npx nx serve legacy
npx nx serve modern

# Iniciar API mock
npm run dev:mock
```

**Variantes de entorno usadas actualmente por todas las apps:**

- `development` - Desarrollo local con proxy a mock API.
- `production` - Despliegue en GitHub Pages con hash routing.

**Configuración de Mock API:**

El proyecto usa `json-server` con una base de datos generada para datos demo:

```bash
# Generar base de datos mock
npm run dev:db

# Iniciar servidor mock API (puerto 3001)
npm run dev:api

# O ambos en secuencia
npm run dev:mock
```

### Acceso Demo Para GitHub Pages

La demo publicada expone datos de ciudadanos y procedimientos gubernamentales para demostración de portafolio.

**Datos de ejemplo incluyen:**

- Registros de ciudadanos con solicitudes de permisos.
- Procedimientos de gobierno regional (AREQUIPA, LIMA, etc.).
- Seguimiento de estado de aplicaciones (draft, submitted, under_review, completed).
- Gestión de permisos (transport, business, construction).

### CI/CD

**`.github/workflows/ci.yml`**

- Corre en `push` a `main`, `pull_request`, y `workflow_dispatch` manual.
- Ejecuta `npm install --legacy-peer-deps` para resolución de dependencias.
- Genera base de datos mock para integración en build-time.
- Ejecuta `lint` en paralelo entre shell, legacy y modern.
- Ejecuta `test` con Vitest en todas las librerías data-access y features.
- Ejecuta `build` para las tres aplicaciones con configuración de producción.
- Prepara artefacto combinado con patching de base-href para GitHub Pages.
- Exporta datos de mock API a JSON estático para consumo del cliente.
- Despliega a GitHub Pages con federación automática del manifiesto.

### Documentación

- **Índice de docs:** `./docs/`
- **Architecture Decision Records:** `./docs/adr/`

### Brechas Actuales

- Mock API es un backend de demo y no un servicio propio de producción.
- El despliegue estático usa hash routing lo que cambia la estructura de URLs (`/#/ruta`).
- Falta observabilidad y gobierno de release.
- El E2E depende de la disponibilidad del mock API y generación determinista de datos.
- La configuración de Native Federation requiere alineación cuidadosa de versiones entre remotos.

# GovPortal - Enterprise Micro-Frontend Architecture Demo

[![CI/CD Pipeline](https://github.com/lrangela/govportal/actions/workflows/ci.yml/badge.svg)](https://github.com/lrangela/govportal/actions/workflows/ci.yml)
**Demo en Vivo (GitHub Pages):** https://lrangela.github.io/govportal/

GovPortal es un proyecto de arquitectura frontend enterprise desarrollado con **Angular 21**, **Nx 22** y **Native Federation**. Demuestra la convivencia, orquestación y estrategia de migración progresiva entre sistemas **Legacy** y **Modernos** utilizando una capa de abstracción desacoplada (**Anti-Corruption Layer - ACL**).

> **Nota de honestidad técnica:** este repositorio es una **demo de arquitectura**, no un producto en producción. La cobertura de tests se enfoca en mappers de dominio, stores/facades y pruebas de integración E2E selectivas; no pretende ser una suite de tests exhaustiva de todas las vistas.

---

## 🎯 ¿Qué demuestra este proyecto para un rol Senior / Architect?

1. **Arquitectura Micro-Frontends (Native Federation):** Orquestación de aplicaciones desacopladas (`shell` host + `legacy-remote` / `modern-remote`) compartiendo dependencias en runtime sin acoplamiento en build-time.
2. **Estrategia de Migración Gradual (Legacy vs Modern):**
   - **Legacy Remote:** Integración con APIs REST tradicionales mediante mappers de dominio explícito, DTOs y facades con RxJS (`CitizensFacade`, `ApplicationsFacade`, `PermitsFacade`).
   - **Modern Remote:** Gestión de estado reactivo moderno basada en **NgRx SignalStore** con **zoneless change detection** (`provideZonelessChangeDetection()`).
3. **Anti-Corruption Layer (ACL):** Las vistas de la interfaz de usuario **no consumen DTOs brutos del backend legacy**. Toda respuesta pasa por adaptadores (`libs/data-access/legacy`) que la transforman en modelos de dominio puro expuestos mediante el alias `@gov/domain` (`libs/src/index.ts`).
4. **Calidad y Estandarización de Tooling:**
   - Monorepo gestionado por **Nx 22** con límites de librerías (`@nx/enforce-module-boundaries`).
   - Tests unitarios con **Vitest** para mappers de dominio, facades, stores y componentes de navegación del shell.
   - Tests End-to-End con **Playwright** (`shell-e2e` y `modern-remote-e2e`).
   - Linting con **ESLint flat config** (incluyendo reglas para no-unused-vars y console controlados).
   - Estilos compartidos mediante un **design token SCSS** centralizado en `libs/core/src/styles/_gov-core.scss` e importado por todas las aplicaciones.

---

## 🏛️ Estructura del Workspace Nx

```
govportal/
├── apps/
│   ├── shell              # Host Principal (Orquestador Native Federation)
│   ├── shell-e2e          # Pruebas End-to-End de integración de rutas Shell
│   ├── legacy             # Micro-frontend Legacy Remote (RxJS / Facades / REST Mappers)
│   ├── modern             # Micro-frontend Modern Remote (NgRx SignalStore / Signals)
│   └── modern-e2e         # Pruebas End-to-End para el remoto moderno
├── libs/
│   ├── src/               # Librería principal de Dominio expuesta como @gov/domain
│   ├── core/              # Utilidades transversales, componentes UI compartidos, HTTP y estilos globales
│   │   ├── http           # Interceptores y cliente HTTP base (@gov/core/http)
│   │   └── src/lib/ui     # Layout primario y Page Header reusable (@gov/core)
│   └── data-access/       # Capas de datos y estado
│       ├── legacy         # DTOs, Mappers ACL y Facades del sistema legacy (@gov/data-access/legacy)
│       └── gov            # Stores reactivos NgRx SignalStore para sistema moderno (@gov/data-access/gov)
├── docs/
│   └── adr/               # Architecture Decision Records (ADRs)
└── tools/
    └── mock-api/          # Generador de datos mock deterministas con json-server
```

---

## 💻 Desarrollo Local y Comandos de Calidad

### Prerrequisitos
- Node.js >= 20
- npm >= 10

### Instalación
```bash
npm install
```

> **Nota sobre dependencias nativas:** Native Federation y su ecosistema pueden traer dependencias nativas transitivas (por ejemplo `@oxc-parser/binding-*`). Si `npm run e2e` o `nx serve` fallan con `Cannot find module '@oxc-parser/binding-win32-x64-msvc'`, ejecutá `npm install` de nuevo para forzar la descarga del binding de la plataforma; en CI esto suele resolverse con `npm ci` en un runner Windows/Linux compatible.

### Comandos Principales

| Comando | Descripción |
| :--- | :--- |
| `npm run serve:mfes` | Sirve la Shell y todos los remotos simultáneamente vía Nx |
| `npm run dev:mock` | Genera y levanta la Mock API REST en `http://localhost:3001` |
| `npm run dev:e2e-stack` | Levanta la API mock + shell + legacy + modern para ejecutar E2E localmente |
| `npm run typecheck` | Verificación estricta de tipos TypeScript sin emitir código |
| `npm run lint` | Suite de linters ESLint en todo el workspace |
| `npm run test` | Unit tests con Vitest en todas las apps y librerías |
| `npm run e2e` | Tests E2E con Playwright a nivel Nx workspace |
| `npm run e2e:shell` | E2E exclusivas de la Shell |
| `npm run e2e:modern` | E2E exclusivas del remoto moderno |

### Cómo correr E2E correctamente

`npm run e2e` ejecuta las suites de Playwright. Cada suite levanta (o reutiliza) el servidor que necesita:

- **`shell-e2e`**: requiere el stack completo. Su `webServer` ejecuta `npm run dev:e2e-stack`, que inicia la mock API (`3001`) y los tres MFes (`shell` en `4200`, `legacy-remote` en `4201`, `modern-remote` en `4202`). Si el stack ya está corriendo, Playwright lo reutiliza (`reuseExistingServer: true`).
- **`modern-e2e`**: levanta `modern-remote:serve` en `http://localhost:4202`. El remoto moderno ahora también usa `proxy.conf.json` para redirigir `/api` al mock server en desarrollo.

Para depurar localmente:
```bash
# Terminal 1
npm run dev:e2e-stack

# Terminal 2
npm run e2e:shell
npm run e2e:modern
```

---

## 🔒 Decisiones Arquitectónicas (ADRs) & Análisis de Herramientas

### Decisiones de Análisis Estático (SonarJS)
Se evaluó la incorporación del plugin `eslint-plugin-sonarjs`. Dado el alcance actual del monorepo y la reciente migración a la **ESLint Flat Config (v9)** en Nx 22, las reglas esenciales de complejidad ciclomática, no-duplicación y calidad de código TypeScript ya están cubiertas mediante `@nx/eslint-plugin` y `@typescript-eslint`. Agregar SonarJS en esta fase incrementaría innecesariamente el tiempo de ejecución en CI sin aportar reglas críticas adicionales no cubiertas.

El proyecto documenta sus decisiones clave de arquitectura en `docs/adr/`:
- [ADR 0001: Data Access & Anti-Corruption Layer](./docs/adr/0001-data-access-anti-corruption-layer.md)
- [ADR 0002: Project Evolution & Native Federation Setup](./docs/adr/0002-project-evolution-and-architectural-decisions.md)
- [ADR 0003: Optimization of Network & Build Stability](./docs/adr/0003-optimization-of-network-usage-and-build-stability.md)

---

## ⚠️ Limitaciones Reales y Consideraciones Técnicas

- **SEO en Despliegues SPA Estáticos:** Al estar desplegado en GitHub Pages mediante una SPA estática y Native Federation con Hash Routing (`/#/legacy/citizens`), el renderizado es puramente Client-Side (CSR). Esto **no es SEO fuerte**: los rastreadores que no ejecuten JavaScript no verán contenido dinámico. Se agregaron etiquetas Open Graph, Twitter Cards, `canonical`, `robots.txt` y `sitemap.xml` en cada remote para mejorar la presencia básica en redes sociales, pero el `sitemap.xml` con URLs hash (`/#/...`) tiene valor limitado para los principales buscadores.
- **Backend Mock:** Los datos servidos en la demo provienen de un archivo estático generado por `tools/mock-api/generate-db.ts` y servido por `json-server`. No hay persistencia real ni autenticación.
- **SSR / Prerender:** No se implementa Angular Universal, SSR ni prerender estático. El despliegue en GitHub Pages es una SPA pura.
- **Tests E2E:** Las suites dependen de que el stack completo esté levantado. Son pruebas de integración de arquitectura, no una cobertura exhaustiva de todos los flujos de usuario.
- **Advertencias en lint general (EventEmitter warning):** Al ejecutar `npm run lint` sobre todo el monorepo en paralelo, se puede observar una advertencia no fatal de Node.js `MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 14 exit listeners added to [process]`. Esto proviene puramente de la orquestación de tareas concurrentes internas de Nx al adjuntar manejadores de salida (`process.on('exit')`) para cada uno de los 10 subprocesos de ESLint en ejecución simultánea, y no indica fugas de memoria o problemas en el código fuente de la aplicación.
- **Native Federation version alignment:** El setup requiere que las versiones de `@angular-architects/native-federation`, Angular y Nx se mantengan alineadas. Actualizar una sin las demás puede romper el build de federación.

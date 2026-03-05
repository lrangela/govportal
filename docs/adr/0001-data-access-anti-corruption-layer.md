# ADR 0001: Data-access + Anti-corruption layer

## Status

Accepted

## Context

El monorepo migra un portal legacy hacia una arquitectura moderna. La API/mocks legacy expone shapes y contratos inestables.
Necesitamos evitar que esos contratos “contaminen” el dominio y la UI, y permitir una migración gradual (legacy → modern) sin reescribir toda la app.

## Decision

Se adopta una arquitectura por capas con separación explícita:

- `@gov/domain`
  - Modelos de dominio (ej. `Citizen`) y tipos compartidos.
  - No depende de Angular ni de HTTP.

- `@gov/data-access/legacy`
  - DTOs legacy (ej. `LegacyCitizenDto`)
  - Clients HTTP (ej. `LegacyCitizensApiClient`)
  - Mappers/anti-corruption layer (ej. `mapLegacyCitizen(dto): Citizen`)
  - Facades orientadas a UI con estado moderno (signals + `rxResource`), incluyendo loading/error/retry.

- `@gov/data-access/gov`
  - DTOs y clients del backend moderno (futuro).
  - Debe exponer el mismo dominio hacia arriba para permitir toggles/flags.

- `@gov/core/http`
  - Cross-cutting concerns de HTTP: `API_BASE_URL` token e interceptors funcionales.

La UI solo consume `Citizen` (dominio) a través de facades; nunca DTOs legacy.

## Consequences

- La UI queda estable aunque cambien los DTOs del backend legacy.
- Migración incremental: se puede alternar entre `legacy` y `modern` con un flag/toggle sin reescribir pantallas.
- Testing más simple:
  - mappers/contratos se testean con unit tests rápidos (Vitest).
  - E2E valida el flujo real con la mock API determinista.

## Notes

Actualmente el backend legacy no soporta `_page/_limit/q`; por lo tanto la paginación/búsqueda se realiza en frontend para el MVP.
Cuando exista endpoint paginado real, el cambio se limita al `ApiClient` sin tocar UI.

# ADR-002: Nx Monorepo for Architectural Governance

## Context
Cuando múltiples equipos desarrollan aplicaciones y librerías comunes en repositorios aislados, se genera rápidamente desalineación de contratos de API, inconsistencias visuales del sistema de diseño y duplicación de librerías core. Se requiere centralizar el ecosistema de frontend garantizando la gobernanza del código y limitando el acoplamiento cruzado de dominios.

## Decision
Utilizar un **Monorepo gestionado por Nx Workspace** para unificar el desarrollo, forzando límites estáticos de dependencias entre los proyectos y librerías compartidas.

## Benefits
1.  **Fronteras de Dominio**: Bloqueo automático de dependencias prohibidas (ej. un módulo operativo importando código del catálogo público) a nivel de linter.
2.  **Nx Affected Optimization**: Reducción de tiempos de compilación y testing en el pipeline ejecutando tareas únicamente sobre los archivos modificados y sus dependientes directos.
3.  **Single Version Policy**: Consistencia total de dependencias de terceros en todo el repositorio.

## Limitations
*   **Curva de Aprendizaje**: Requiere capacitación técnica para comprender el grafo de dependencias de Nx y la jerarquía de librerías (`ui` vs `data-access` vs `feature`).
*   **Refactorización Compleja**: Los cambios en librerías core transversales requieren una revisión rigurosa, ya que impactan a múltiples aplicaciones del monorepo.

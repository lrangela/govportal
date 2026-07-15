# ADR-004: Standalone Components as componentization standard

## Context
El uso clásico de `NgModules` en Angular acopla componentes, directivas y servicios en bloques opacos, dificultando el tree-shaking del compilador y complejizando la modularización de rutas dinámicas requeridas por arquitecturas de Microfrontends.

## Decision
Forzar el uso de **Standalone Components** en todas las aplicaciones y librerías del monorepo, desterrando el uso de `NgModule` excepto para la integración de librerías de terceros heredadas.

## Benefits
1.  **Modularidad Limpia**: Cada componente declara explícitamente sus dependencias visuales en el metadato `@Component.imports`.
2.  **Tree-shaking Óptimo**: El compilador puede remover con precisión el código de componentes y servicios que no se utilicen en producción.
3.  **Lazy Loading Simplificado**: Carga de componentes directos en el enrutador sin declarar módulos intermediarios.

## Limitations
*   Incrementa ligeramente la verbosidad de imports en cada archivo individual de componente.

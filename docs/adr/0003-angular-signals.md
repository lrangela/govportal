# ADR-003: Angular Signals for Reactive State Management

## Context
La gestión de estado basada puramente en Zone.js y change detection implícito dispara verificaciones innecesarias a lo largo de todo el árbol de componentes (Change Detection Loops). En aplicaciones empresariales de alta densidad de datos en tiempo real, esto deteriora el rendimiento y la capacidad de respuesta de la UI.

## Decision
Adoptar **Angular Signals** como la primitiva central de reactividad síncrona y gestión de estado local y de dominio en el monorepo.

## Performance considerations
1.  **Reactividad Fina**: Angular actualiza de forma dirigida la porción del DOM vinculada a la señal modificada, evitando re-renderizar ramas completas de componentes.
2.  **Zoneless Change Detection**: Habilita la desactivación progresiva de Zone.js (`provideZonelessChangeDetection`), disminuyendo los tiempos de CPU en cliente.
3.  **Computaciones Eficientes**: Uso de `computed` para derivar estados con memorización automática, optimizando cálculos matemáticos del negocio.

## Limitations
*   No posee soporte nativo para retardos temporales o cancelaciones de red, requiriendo interoperar con RxJS (`toSignal`/`toObservable`) para llamadas de búsqueda o debounce.

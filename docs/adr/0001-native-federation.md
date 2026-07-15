# ADR-001: Native Federation as Microfrontend Engine

## Context
En arquitecturas de gran escala distribuidas entre múltiples equipos autónomos, la compilación y despliegue monolítico genera cuellos de botella operativos. Se requiere un modelo de Microfrontends (MFE) que permita a cada equipo desplegar de forma independiente. Sin embargo, acoplar la federación a Webpack Module Federation impide utilizar empaquetadores locales rápidos basados en esbuild o Vite, ralentizando el pipeline de desarrollo local y de integración continua.

## Decision
Adoptar **Softarc Native Federation** para orquestar la federación de módulos en runtime sobre estándares nativos de navegadores (ESM e Import Maps), independizando la compilación de la tecnología del empaquetador.

## Why
1.  **Independencia de Bundlers**: Permite migrar y compilar sub-módulos y la shell con esbuild y Vite.
2.  **Cumplimiento de Estándares**: Sigue las especificaciones de la W3C de Import Maps nativos.
3.  **Despliegue Independiente**: Los remotos se pueden compilar y subir a CDNs separadas sin forzar el despliegue del host.

## Trade-offs
*   **Limitaciones**: Requiere de shims en tiempo de ejecución (`es-module-shims`) para navegadores antiguos que carezcan de soporte completo para import maps nativos, incrementando marginalmente la carga inicial de red.
*   **Complejidad**: Mayor complejidad para configurar y alinear versiones comunes en el manifiesto dinámico de dependencias.

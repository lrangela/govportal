# ADR 0003: Optimizacion del consumo de red y estabilidad del build

## Status

Accepted

## Context

El usuario reporto un consumo inesperado de ancho de banda de internet durante el guardado de archivos (save), ejecucion del servidor de desarrollo (dev) y construccion (uild).

Tras una investigacion exhaustiva, se identificaron los siguientes vectores de consumo de red:

1. **Native Federation**: El uso de \equiredVersion: 'auto'\ en \ederation.config.js\ puede disparar consultas al registro de npm para validar compatibilidad de versiones compartidas si los metadatos locales no son suficientes o estan desactualizados.
2. **Nx Console / Daemon**: El daemon de Nx y la extension de IDE realizan comprobaciones de estado frecuentes, incluyendo la descarga de binarios de Nx para validacion (\Pulling latest Nx\).
3. **Telemetria de Angular**: Por defecto, Angular CLI envia datos de uso a Google.
4. **GitHub CLI (gh)**: Scripts de fondo o extensiones intentan invocar el comando \gh\ para sincronizar PRs/Issues, fallando y reintentando constantemente.

Estos comportamientos no afectan la funcionalidad pero degradan la experiencia de desarrollo en entornos con conectividad limitada o monitoreo de red estricto.

## Decision

Se formalizan las siguientes acciones para mitigar el consumo de red y mejorar el determinismo:

### 1. Desactivacion de Telemetria de Angular

Se deshabilita globalmente la recoleccion de datos de uso mediante el comando:
\\\ash
npx ng analytics disable --global
\\\

### 2. Optimizacion de Native Federation

Se recomienda fijar versiones explicitas o utilizar rangos mas estrictos en \ederation.config.js\ para evitar que el plugin realice búsquedas remotas durante el build. Se mantiene \ignoreUnusedDeps: true\ para optimizar el empaquetado.

### 3. Recomendaciones para el Entorno de Desarrollo

- **Nx Console**: Desactivar las actualizaciones automáticas o el chequeo de estado de la extensión en el IDE.
- **GitHub CLI**: Instalar el binario de \gh\ o deshabilitar las extensiones que lo invocan para evitar errores de sistema y reintentos innecesarios.

## Consequences

- Reduccion del trafico de red saliente innecesario.
- Builds mas deterministas al no depender de consultas externas para la resolucion de versiones de federacion.
- Menor ruido en los logs de error del sistema por comandos faltantes (\gh\).
- Se requiere actualizacion manual de las versiones en \ederation.config.js\ si hay cambios mayores en las dependencias compartidas.
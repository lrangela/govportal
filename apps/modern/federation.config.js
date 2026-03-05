const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'modern-remote',

  exposes: {
    './Component': './apps/modern/src/app/app.ts',
    './Routes': './apps/modern/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: '~21.1.0' }),
    'rxjs': { singleton: true, strictVersion: true, requiredVersion: '~7.8.0' },
    // Forzar el secondary entry point como singleton para evitar el Token Mismatch de rxResource
    '@angular/core/rxjs-interop': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '~21.1.0',
      includeSecondaries: true,
    }
  },

  skip: [
    '@ngrx/signals',
    '@ngrx/signals/rxjs-interop',
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    // New feature for more performance and avoiding
    // issues with node libs. Comment this out to
    // get the traditional behavior:
    ignoreUnusedDeps: true
  }
});

import { loadRemoteModule } from '@angular-architects/native-federation';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'legacy',
        loadChildren: () =>
            loadRemoteModule('legacy-remote', './Routes').then((m) => m.appRoutes),
    },
    {
        path: 'modern',
        loadChildren: () =>
            loadRemoteModule('modern-remote', './Routes').then((m) => m.appRoutes),
    },
    // Redirección por defecto: si entran a la raíz, los mandamos a legacy
    {
        path: '',
        redirectTo: 'legacy',
        pathMatch: 'full'
    }
];

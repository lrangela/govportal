import { Route } from '@angular/router';

export const modernRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'citizens' },
    {
        path: 'citizens',
        loadComponent: () =>
            import('./citizens/citizens-list').then((m) => m.CitizensList),
    },
    {
        path: 'citizens/:id',
        loadComponent: () =>
            import('./citizens/citizen-detail').then((m) => m.CitizenDetail),
    },
    {
        path: 'permits',
        loadComponent: () =>
            import('./permits/permits-list').then((m) => m.PermitsList),
    },
    {
        path: 'applications',
        loadComponent: () =>
            import('./applications/applications-list').then((m) => m.ApplicationsList),
    },
];

export const appRoutes: Route[] = [
    {
        path: '',
        children: modernRoutes
    }
];

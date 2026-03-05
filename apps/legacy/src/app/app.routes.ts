import { Route } from '@angular/router';
import { CitizensListPage } from './citizens/citizens-list.page';

export const legacyRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'citizens' },
    { path: 'citizens', component: CitizensListPage },
    {
        path: 'citizens/:id',
        loadComponent: () =>
            import('./citizens/citizen-detail.page').then((m) => m.CitizenDetailPage),
    },
    {
        path: 'permits',
        loadComponent: () =>
            import('./permits/permits-list.page').then((m) => m.PermitsPage),
    },
    {
        path: 'applications',
        loadComponent: () =>
            import('./applications/applications-list.page').then(
                (m) => m.ApplicationsListPage
            ),
    },
];

export const appRoutes: Route[] = [
    {
        path: '',
        children: legacyRoutes
    }
];

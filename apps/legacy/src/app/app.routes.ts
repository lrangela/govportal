import { Route } from '@angular/router';
import {
    CitizensFacade,
    ApplicationsFacade,
    PermitsFacade,
} from '@gov/data-access/legacy';

export const legacyRoutes: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'citizens' },
    {
        path: 'citizens',
        loadComponent: () =>
            import('./citizens/citizens-list.page').then((m) => m.CitizensListPage),
    },
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
        providers: [CitizensFacade, PermitsFacade, ApplicationsFacade],
        children: legacyRoutes,
    },
];

import { inject } from '@angular/core';
import { signalStore, withState, withMethods, patchState, withComputed } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { computed } from '@angular/core';
import { pipe, switchMap, tap, catchError, of } from 'rxjs';
import { LegacyApplicationsApiClient, mapLegacyApplication } from '@gov/data-access/legacy';
import { Application } from '@gov/domain';

export const ApplicationsStore = signalStore(
    { providedIn: 'root' },
    withState({
        items: [] as Application[],
        isLoading: false,
        error: null as string | null,
        q: '',
        page: 1,
        limit: 10,
        total: 0,
    }),
    withComputed(({ items, q, page, limit }) => ({
        // Lógica de filtrado y paginación local (ACL/Frontend side)
        filteredItems: computed(() => {
            const query = q().toLowerCase();
            const filtered = items().filter(c =>
                c.id.toLowerCase().includes(query) ||
                c.citizenId.toLowerCase().includes(query) ||
                c.permitId.toLowerCase().includes(query) ||
                c.region.toLowerCase().includes(query) ||
                c.status.toLowerCase().includes(query)
            );

            const start = (page() - 1) * limit();
            return filtered.slice(start, start + limit());
        }),
        totalFiltered: computed(() => {
            const query = q().toLowerCase();
            return items().filter(c =>
                c.id.toLowerCase().includes(query) ||
                c.citizenId.toLowerCase().includes(query) ||
                c.permitId.toLowerCase().includes(query) ||
                c.region.toLowerCase().includes(query) ||
                c.status.toLowerCase().includes(query)
            ).length;
        }),
        isEmpty: computed(() => items().length === 0)
    })),
    withMethods((store, api = inject(LegacyApplicationsApiClient)) => ({
        setSearch: (q: string) => patchState(store, { q, page: 1 }),
        setPage: (page: number) => patchState(store, { page }),
        setLimit: (limit: number) => patchState(store, { limit, page: 1 }),

        loadAll: rxMethod<void>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap(() => api.getApplications({ limit: 100000 }).pipe( // Traemos todo para filtrar localmente
                    tap((result) => patchState(store, {
                        items: result.items.map(mapLegacyApplication),
                        total: result.total,
                        isLoading: false
                    })),
                    catchError((err) => {
                        patchState(store, { isLoading: false, error: 'Error loading applications' });
                        return of(err);
                    })
                ))
            )
        )
    }))
);
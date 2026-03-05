import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { catchError, map, of, retry } from 'rxjs';
import type { Application } from '@gov/domain';

import { LegacyApplicationsApiClient } from './legacy-applications-api.client';
import { mapLegacyApplication } from './legacy-application.mapper';

@Injectable({ providedIn: 'any' })
export class ApplicationsFacade {
    private readonly api = inject(LegacyApplicationsApiClient);
    private readonly reloadTick = signal(0);

    readonly q = signal('');
    readonly page = signal(1);
    readonly limit = signal(10);

    readonly isLoading = signal(false);
    readonly error = signal<unknown | null>(null);
    readonly total = signal(0);
    readonly applications = signal<Application[]>([]);

    readonly isEmpty = computed(
        () => !this.isLoading() && !this.error() && this.applications().length === 0
    );

    constructor() {
        effect((onCleanup) => {
            const params = {
                q: this.q(),
                page: this.page(),
                limit: this.limit(),
            };

            this.reloadTick();
            this.isLoading.set(true);
            this.error.set(null);

            const sub = this.api
                .getApplications(params)
                .pipe(
                    retry({ count: 1, delay: 250 }),
                    map((result) => ({
                        items: result.items.map(mapLegacyApplication),
                        total: result.total,
                    })),
                    catchError((error) =>
                        of({
                            items: [] as Application[],
                            total: 0,
                            error,
                        })
                    )
                )
                .subscribe((result) => {
                    this.applications.set(result.items);
                    this.total.set(result.total);
                    this.error.set('error' in result ? result.error : null);
                    this.isLoading.set(false);
                });

            onCleanup(() => sub.unsubscribe());
        });
    }

    setSearch(q: string): void {
        this.q.set(q);
        this.page.set(1);
    }

    setPage(page: number): void {
        this.page.set(page);
    }

    setLimit(limit: number): void {
        this.limit.set(limit);
        this.page.set(1);
    }

    refresh(): void {
        this.reloadTick.update((tick) => tick + 1);
    }
}

import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { catchError, of, retry } from 'rxjs';
import type { Citizen } from '@gov/domain';
import { mapLegacyCitizen } from './legacy-citizen.mapper';
import {
    LegacyCitizensApiClient,
    type LegacyCitizensResult,
} from './legacy-citizens-api.client';

@Injectable({ providedIn: 'root' })
export class CitizensFacade {
    private readonly api = inject(LegacyCitizensApiClient);
    private readonly reloadTick = signal(0);

    readonly q = signal('');
    readonly page = signal(1);
    readonly limit = signal(10);

    readonly isLoading = signal(false);
    readonly error = signal<unknown | null>(null);
    readonly total = signal(0);
    readonly citizens = signal<Citizen[]>([]);

    readonly isEmpty = computed(
        () => !this.isLoading() && !this.error() && this.citizens().length === 0
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
                .getCitizens(params)
                .pipe(
                    retry({ count: 1, delay: 250 }),
                    catchError((error) =>
                        of<LegacyCitizensResult & { error: unknown }>({
                            items: [],
                            total: 0,
                            error,
                        })
                    )
                )
                .subscribe((result) => {
                    this.citizens.set(result.items.map(mapLegacyCitizen));
                    this.total.set(result.total);
                    this.error.set('error' in result ? result.error : null);
                    this.isLoading.set(false);
                });

            onCleanup(() => sub.unsubscribe());
        });
    }

    setSearch(q: string) {
        this.q.set(q);
        this.page.set(1);
    }

    setPage(page: number) {
        this.page.set(page);
    }

    setLimit(limit: number) {
        this.limit.set(limit);
        this.page.set(1);
    }

    refresh() {
        this.reloadTick.update((tick) => tick + 1);
    }
}

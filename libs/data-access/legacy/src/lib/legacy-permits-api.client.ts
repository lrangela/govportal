import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { LegacyPermitDto } from './legacy-permit.dto';

export interface LegacyPermitsQuery {
    q?: string;
    page?: number; // 1-based
    limit?: number; // page size
}

export interface LegacyPermitsResult {
    items: LegacyPermitDto[];
    total: number;
}

@Injectable({ providedIn: 'any' })
export class LegacyPermitsApiClient {
    private readonly http = inject(HttpClient);

    getPermits(query: LegacyPermitsQuery): Observable<LegacyPermitsResult> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const q = query.q?.trim().toLowerCase() ?? '';

        // Backend legacy: solo soporta /permits sin params
        return this.http.get<unknown[]>('api/permits').pipe(
            map((allRaw) => {
                const all = Array.isArray(allRaw) ? allRaw : [];

                const filtered = !q
                    ? all
                    : all.filter((x) => {
                        const record = (x ?? {}) as Record<string, unknown>;
                        const hay = [
                            record['id'],
                            record['citizenId'],
                            record['citizen_id'],
                            record['type'],
                            record['permit_type'],
                            record['status'],
                            record['permit_status'],
                            record['region'],
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();

                        return hay.includes(q);
                    });

                const total = filtered.length;
                const start = (page - 1) * limit;
                const items = filtered.slice(start, start + limit);

                return { items: items as LegacyPermitDto[], total };
            })
        );
    }
}

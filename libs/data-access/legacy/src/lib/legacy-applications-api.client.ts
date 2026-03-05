import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { LegacyApplicationDto } from './legacy-application.dto';

export interface LegacyApplicationsQuery {
    q?: string;
    page?: number;
    limit?: number;
}

export interface LegacyApplicationsResult {
    items: LegacyApplicationDto[];
    total: number;
}

@Injectable({ providedIn: 'any' })
export class LegacyApplicationsApiClient {
    private readonly http = inject(HttpClient);

    getApplications(
        query: LegacyApplicationsQuery
    ): Observable<LegacyApplicationsResult> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const q = query.q?.trim().toLowerCase() ?? '';

        return this.http.get<unknown[]>('api/applications').pipe(
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
                            record['permitId'],
                            record['permit_id'],
                            record['region'],
                            record['status'],
                            record['application_status'],
                            record['createdAt'],
                            record['created_at'],
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();

                        return hay.includes(q);
                    });

                const total = filtered.length;
                const start = (page - 1) * limit;
                const items = filtered.slice(start, start + limit);

                return { items: items as LegacyApplicationDto[], total };
            })
        );
    }
}

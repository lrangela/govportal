import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import type { LegacyCitizenDto } from './legacy-citizen.dto';

export interface LegacyCitizensQuery {
    q?: string;
    page?: number;   // 1-based
    limit?: number;  // page size
}

export interface LegacyCitizensResult {
    items: LegacyCitizenDto[];
    total: number;
}

@Injectable({ providedIn: 'any' })
export class LegacyCitizensApiClient {
    private readonly http = inject(HttpClient);

    getCitizens(query: LegacyCitizensQuery): Observable<LegacyCitizensResult> {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const q = query.q?.trim().toLowerCase() ?? '';

        // Backend legacy: solo soporta /citizens sin params
        return this.http.get<unknown[]>('api/citizens').pipe(
            map((allRaw) => {
                const all = Array.isArray(allRaw) ? allRaw : [];

                // búsqueda simple (name/doc/email si existen)
                const filtered = !q
                    ? all
                    : all.filter((x) => {
                        const record = (x ?? {}) as Record<string, unknown>;
                        const hay = [
                            record['firstName'],
                            record['lastName'],
                            record['doc_number'],
                            record['docNumber'],
                            record['email'],
                            record['id'],
                        ]
                            .filter(Boolean)
                            .join(' ')
                            .toLowerCase();
                        return hay.includes(q);
                    });

                const total = filtered.length;
                const start = (page - 1) * limit;
                const items = filtered.slice(start, start + limit);

                return { items: items as LegacyCitizenDto[], total };
            })
        );
    }
}

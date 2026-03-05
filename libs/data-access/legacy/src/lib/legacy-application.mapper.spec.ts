import { mapLegacyApplication } from './legacy-application.mapper';
import type { LegacyApplicationDto } from './legacy-application.dto';

describe('mapLegacyApplication', () => {
    it('maps legacy dto to domain application', () => {
        const dto: LegacyApplicationDto = {
            id: 'a-1',
            citizenId: 'c-1',
            permitId: 'p-1',
            status: 'SUBMITTED',
            region: 'AREQUIPA',
            createdAt: '2026-01-01T04:10:00.000Z',
            updatedAt: '2026-01-01T04:11:00.000Z',
        };

        expect(mapLegacyApplication(dto)).toEqual({
            id: 'a-1',
            citizenId: 'c-1',
            permitId: 'p-1',
            status: 'submitted',
            region: 'AREQUIPA',
            createdAt: '2026-01-01T04:10:00.000Z',
            updatedAt: '2026-01-01T04:11:00.000Z',
        });
    });

    it('supports applications without permitId (if present in mock)', () => {
        const dto: LegacyApplicationDto = {
            id: 'a-2',
            citizenId: 'c-2',
            status: 'DRAFT',
        };

        const mapped = mapLegacyApplication(dto);

        expect(mapped.id).toBe('a-2');
        expect(mapped.citizenId).toBe('c-2');
        expect(mapped.status).toBe('draft');
    });
});
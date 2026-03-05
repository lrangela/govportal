import { mapLegacyPermit } from './legacy-permit.mapper';
import type { LegacyPermitDto } from './legacy-permit.dto';

describe('mapLegacyPermit', () => {
    it('maps legacy dto to domain permit', () => {
        const dto: LegacyPermitDto = {
            id: 'p-1',
            citizenId: 'c-1',
            type: 'CONSTRUCTION',
            status: 'APPROVED',
            region: 'LIMA',
            createdAt: '2026-01-01T02:12:00.000Z',
            updatedAt: '2026-01-01T02:13:00.000Z',
        };

        expect(mapLegacyPermit(dto)).toEqual({
            id: 'p-1',
            citizenId: 'c-1',
            type: 'construction',
            status: 'approved',
            region: 'LIMA',
            createdAt: '2026-01-01T02:12:00.000Z',
            updatedAt: '2026-01-01T02:13:00.000Z',
        });
    });

    it('is resilient to missing optional fields', () => {
        const dto: LegacyPermitDto = {
            id: 'p-2',
            citizenId: 'c-2',
        };

        const mapped = mapLegacyPermit(dto);

        expect(mapped.id).toBe('p-2');
        expect(mapped.citizenId).toBe('c-2');
    });
});
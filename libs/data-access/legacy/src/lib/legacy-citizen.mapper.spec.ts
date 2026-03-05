import { mapLegacyCitizen } from './legacy-citizen.mapper';
import type { LegacyCitizenDto } from './legacy-citizen.dto';

describe('mapLegacyCitizen', () => {
    it('maps legacy dto to domain citizen', () => {
        const dto: LegacyCitizenDto = {
            id: 'c-1',
            first_name: 'Ada',
            last_name: 'Lovelace',
            doc_number: 'ABC123',
            is_active: true,
            created_at: '2020-01-01T00:00:00.000Z',
        };

        expect(mapLegacyCitizen(dto)).toEqual({
            id: 'c-1',
            fullName: 'Ada Lovelace',
            documentNumber: 'ABC123',
            status: 'active',
            createdAt: '2020-01-01T00:00:00.000Z',
        });
    });

    it('trims fullName when a part is empty', () => {
        const dto: LegacyCitizenDto = {
            id: 'c-2',
            first_name: 'Ada',
            last_name: '',
            doc_number: 'XYZ999',
            is_active: false,
            created_at: '2020-01-02T00:00:00.000Z',
        };

        expect(mapLegacyCitizen(dto).fullName).toBe('Ada');
        expect(mapLegacyCitizen(dto).status).toBe('inactive');
    });
});
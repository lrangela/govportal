import type { Citizen } from '@gov/domain';
import type { LegacyCitizenDto } from './legacy-citizen.dto';

export function mapLegacyCitizen(dto: LegacyCitizenDto): Citizen {
    const firstName = dto.first_name ?? dto.firstName ?? '';
    const lastName = dto.last_name ?? dto.lastName ?? '';
    const fullName = `${firstName} ${lastName}`.trim() || dto.id;
    const documentNumber = dto.doc_number ?? dto.docNumber ?? dto.email ?? '-';
    const rawStatus = dto.status?.toLowerCase();
    const status = rawStatus === 'active' || dto.is_active ? 'active' : 'inactive';
    const createdAt = dto.created_at ?? dto.createdAt ?? '';

    return {
        id: dto.id,
        fullName,
        documentNumber,
        status,
        createdAt,
    };
}

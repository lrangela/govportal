import type { Permit, PermitStatus, PermitType } from '@gov/domain';
import type { LegacyPermitDto } from './legacy-permit.dto';

const normalizeType = (raw: unknown): PermitType => {
    const v = String(raw ?? '').toLowerCase();
    if (v === 'transport' || v === 'business' || v === 'construction') return v;
    return 'business';
};

const normalizeStatus = (raw: unknown): PermitStatus => {
    const v = String(raw ?? '').toLowerCase();
    if (v === 'pending' || v === 'approved' || v === 'rejected') return v;
    return 'pending';
};

export function mapLegacyPermit(dto: LegacyPermitDto): Permit {
    const citizenId = dto.citizenId ?? dto.citizen_id ?? '';
    const type = normalizeType(dto.type ?? dto.permit_type);
    const status = normalizeStatus(dto.status ?? dto.permit_status);

    const createdAt = dto.createdAt ?? dto.created_at ?? '';
    const updatedAt = dto.updatedAt ?? dto.updated_at ?? createdAt;

    return {
        id: dto.id,
        citizenId,
        type,
        status,
        region: dto.region ?? '',
        createdAt,
        updatedAt,
    };
}
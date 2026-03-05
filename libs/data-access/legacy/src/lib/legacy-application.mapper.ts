import type {
    Application,
    ApplicationStatus,
} from '@gov/domain';
import type { LegacyApplicationDto } from './legacy-application.dto';

const normalizeStatus = (raw: unknown): ApplicationStatus => {
    const v = String(raw ?? '').toLowerCase();
    if (
        v === 'draft' ||
        v === 'submitted' ||
        v === 'under_review' ||
        v === 'completed'
    )
        return v;
    return 'draft';
};

export function mapLegacyApplication(
    dto: LegacyApplicationDto
): Application {
    return {
        id: dto.id,
        citizenId: dto.citizenId ?? dto.citizen_id ?? '',
        permitId: dto.permitId ?? dto.permit_id ?? '',
        region: dto.region ?? '',
        status: normalizeStatus(dto.status ?? dto.application_status),
        createdAt: dto.createdAt ?? dto.created_at ?? '',
        updatedAt:
            dto.updatedAt ??
            dto.updated_at ??
            dto.createdAt ??
            dto.created_at ??
            '',
    };
}

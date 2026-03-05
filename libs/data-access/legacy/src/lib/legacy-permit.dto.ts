export interface LegacyPermitDto {
    id: string;

    // legacy inconsistente
    citizenId?: string;
    citizen_id?: string;

    type?: string;
    permit_type?: string;

    status?: string;
    permit_status?: string;

    region?: string;

    createdAt?: string;
    created_at?: string;

    updatedAt?: string;
    updated_at?: string;
}
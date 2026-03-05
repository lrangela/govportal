export interface LegacyCitizenDto {
    id: string;
    first_name?: string;
    last_name?: string;
    doc_number?: string;
    is_active?: boolean;
    created_at?: string; // ISO string
    firstName?: string;
    lastName?: string;
    docNumber?: string;
    email?: string;
    status?: 'ACTIVE' | 'INACTIVE' | 'active' | 'inactive';
    createdAt?: string;
}

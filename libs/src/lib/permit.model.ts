export type PermitId = string;

export type PermitType = 'transport' | 'business' | 'construction';
export type PermitStatus = 'pending' | 'approved' | 'rejected';

export interface Permit {
    id: PermitId;
    citizenId: string;

    type: PermitType;
    status: PermitStatus;

    region: string;

    createdAt: string; // ISO string (determinista en mock)
    updatedAt: string; // ISO string
}
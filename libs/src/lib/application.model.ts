export type ApplicationId = string;

export type ApplicationStatus = 'draft' | 'submitted' | 'under_review' | 'completed';

export interface Application {
    id: ApplicationId;
    citizenId: string;
    permitId: string;
    region: string;

    status: ApplicationStatus;

    createdAt: string; // ISO
    updatedAt: string; // ISO
}

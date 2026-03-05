export type CitizenId = string;

export interface Citizen {
    id: CitizenId;
    fullName: string;
    documentNumber: string;
    status: 'active' | 'inactive';
    createdAt: string; // ISO string (determinista en mock)
}
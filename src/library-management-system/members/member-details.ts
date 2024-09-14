export interface MemberDetails {
    id: number;
    name: string;
    email?: string;
    membership: 'Adult' | 'Child';
}
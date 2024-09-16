import { MemberDetails } from "../members/member-details";

export interface LoanDetails {
    member: MemberDetails
    takenDate: string;
    returnedDate: string;
}
import { LibraryItem } from "../libraries/library-item";
import { LoanDetails } from "../loans/loan-details.interface";

export class MembersManager {
    borrow(item: LibraryItem, loanDetails: LoanDetails) { }
    returnItem(item: LibraryItem, loanDetails: LoanDetails) { }
}
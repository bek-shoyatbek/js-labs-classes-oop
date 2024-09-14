import { LibraryItem } from "../../libraries/library-item";
import { LoanDetails } from "../loan-details.interface";

export interface LoanHistory {
    item: LibraryItem;
    loanDetails: LoanDetails;
    status: 'returned' | 'in-use';
}
import { LibraryItem } from "../libraries/library-item";
import { LoanHistory } from "./history/history-details";
import { LoanDetails } from "./loan-details.interface";

export class LoanManager {
    private history: LoanHistory[];

    constructor(externalStorage?: LoanHistory[]) {
        this.history = externalStorage || [];
    }

    borrow(item: LibraryItem, loanDetails: LoanDetails): void {
        this.history.push({ item, loanDetails, status: 'in-use' });
        console.info(`
            Member: ${loanDetails.member.name}
            Borrowed: ${item.getDetails()}
            Taken: ${loanDetails.takenDate}
            Return: ${loanDetails.returnedDate}`)
    }

    returnItem(item: LibraryItem, loanDetails: LoanDetails): void {
        const itemIndex = this.findItem(item);
        if (itemIndex == -1) {
            throw new Error("Item not found!")
        }

        this.history[itemIndex].status = "returned";
        console.info(`
            Item: ${item.getDetails}
            Returned: ${loanDetails.returnedDate}`);
    }

    private findItem(item: LibraryItem) {
        for (let itemIndex = 0; itemIndex < this.history.length; itemIndex++) {
            if (this.history[itemIndex].item.id == item.id) {
                return itemIndex;
            }
        }
        return -1;
    }
}
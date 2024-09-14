import { Book } from "./books/book.service";
import { LibraryManager } from "./libraries/library.service";
import { LoanDetails } from "./loans/loan-details.interface";
import { LoanManager } from "./loans/loan.service";
import { MemberDetails } from "./members/member-details";

function main() {
    const booksStorage: Book[] = []
    const libraryManager = new LibraryManager(booksStorage);
    const loanManager = new LoanManager();

    const newBook = new Book({ id: 1, title: 'System Design', author: 'Bek Shoyatbek', publishedDate: Date.now().toString() });
    libraryManager.addItem(newBook);

    const userBek: MemberDetails = { id: 0, name: 'Bek', membership: 'Adult' };
    const loanDetails: LoanDetails = { member: userBek, takenDate: '02/09/2024', returnedDate: '02/10/2024' };
    loanManager.borrow(newBook, loanDetails);
    loanManager.returnItem(newBook, loanDetails);
}

main();
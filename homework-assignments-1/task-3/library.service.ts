import { IBook } from "./book.interface";
import { ILibrary } from "./library.interface";

export class Library implements ILibrary {
    private books: IBook[];
    constructor(externalBookStore?: IBook[]) {
        this.books = externalBookStore || [];
    }
    addBook(book: IBook): boolean {
        this.books.push(book);
        return true;
    }

    removeBookByISBN(isbn: number): boolean {
        this.books = this.books.filter(book => { book.isbn != isbn });
        return true;
    }
}
import { IBookDetails } from "./book-details.interface";
import { ILibrary } from "./library.interface";

export class Library implements ILibrary {
  private books: IBookDetails[];
  constructor(externalBookStore?: IBookDetails[]) {
    this.books = externalBookStore || [];
  }
  addBook(book: IBookDetails): boolean {
    this.books.push(book);
    return true;
  }

  removeBookByISBN(isbn: number): boolean {
    this.books = this.books.filter((book) => {
      book.isbn != isbn;
    });
    return true;
  }
}

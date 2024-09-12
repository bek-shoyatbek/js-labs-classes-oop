import { IBookDetails } from "./book-details.interface";

export interface ILibrary {
  addBook(book: IBookDetails): boolean;
  removeBookByISBN(isbn: number): boolean;
}

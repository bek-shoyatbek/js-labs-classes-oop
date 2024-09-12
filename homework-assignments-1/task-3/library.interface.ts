import { IBook } from "./book.interface";

export interface ILibrary {
    addBook(book: IBook): boolean;
    removeBookByISBN(isbn: number): boolean;
}
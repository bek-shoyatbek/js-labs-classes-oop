import { IBookDetails } from "./book-details.interface";

export class Book {
  public title: string;
  public author: string;
  public isbn: number;
  constructor(book: IBookDetails) {
    this.isbn = book.isbn || this.generateId();
    this.title = book.title;
    this.author = book.author;
  }
  private generateId() {
    return Math.floor(Math.random() * 100);
  }
}

import { IBook } from "./book.interface";

export class Book implements IBook {
    public title: string;
    public author: string;
    public isbn: number;
    constructor(book: Omit<Book, "isbn">) {
        this.isbn = this.generateId();
        this.title = book.title;
        this.author = book.author;
    }
    private generateId() {
        return Math.floor(Math.random() * 100);
    }
}
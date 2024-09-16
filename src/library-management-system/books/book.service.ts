import { LibraryItem } from "../libraries/library-item";
import { BookDetails, BookGenres } from "./book-details.interface";

export class Book extends LibraryItem {
    constructor(protected book: BookDetails) {
        super(book.id, book.title)
    }
    getDetails(): string {
        return `Book details:
        Title: ${this.book.title},
        Author: ${this.book.author}
        Published Date: ${this.book.publishedDate}`;
    }
}

export class FictionBook extends Book {
    private genres: BookGenres[];
    constructor(book: BookDetails) {
        super(book)
        this.genres = ['fantasy', 'science fiction'];
    }

    getDetails(): string {
        return `Book details:
        Title: ${this.book.title},
        Author: ${this.book.author},
        Genres: ${this.genres.toString()},
        Published Date: ${this.book.publishedDate}`;
    }
}

export class NonFictionBook extends Book {
    private genres: BookGenres[];
    constructor(book: BookDetails) {
        super(book)
        this.genres = ['biography', 'history'];
    }
    getDetails(): string {
        return `Book details:
        Title: ${this.book.title},
        Author: ${this.book.author},
        Genres: ${this.genres.toString()},
        Published Date: ${this.book.publishedDate}`;
    }
}

export class ReferenceBook extends Book { }
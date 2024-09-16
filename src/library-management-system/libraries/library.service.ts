import { LibraryItem } from "./library-item";
import { LibraryService } from "./library.interface";

export class LibraryManager<T = LibraryItem> implements LibraryService<T> {
    constructor(private storage: T[]) { }

    addItem(item: T): boolean {
        this.storage.push(item);
        console.info(`Item:  ${(item as LibraryItem)?.id} added to the library!`);
        return true;
    }

    removeItem(item: T): boolean {
        const indexOfItem = this.storage.indexOf(item);
        if (!indexOfItem) {
            throw new Error("Item not found");
        }
        console.info(`Item: ${(item as LibraryItem)?.id} removed from the library!`);
        return true;
    }
}
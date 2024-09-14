import { LibraryItem } from "../libraries/library-item";

export class BookProcessingManager {
    processLibraryItem(items: LibraryItem[]): void {
        if (!items) {
            throw new Error("No item found to process");
        }

        items.forEach(item => {
            item.getDetails()
        })
    }
}
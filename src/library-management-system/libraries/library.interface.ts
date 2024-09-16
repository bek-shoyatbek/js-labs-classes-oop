export interface LibraryService<T> {
    addItem(item: T): boolean;
    removeItem(item: T): boolean;
}
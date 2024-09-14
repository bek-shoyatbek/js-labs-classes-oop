export abstract class LibraryItem {
    constructor(public id: number, public title: string) { }

    getDetails() {
        return `Item id: ${this.id}, name: ${this.title}`;
    }
}
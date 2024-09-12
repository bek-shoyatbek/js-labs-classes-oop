export interface IProduct {
    name: string;
    price: number;
    stock: number;
    addStock(quantity: number): boolean;
    reduceStock(quantity: number): boolean;
}
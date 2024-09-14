export interface IProduct {
  addStock(quantity: number): boolean;
  reduceStock(quantity: number): boolean;
}

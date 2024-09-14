import { IProductDetails } from "./product-details.interface";
import { IProduct } from "./product.interface";

export class Product implements IProduct {
  private name: string;
  private price: number;
  private stock: number;
  constructor(product: IProductDetails) {
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
  }

  public getPrice() {
    return this.price;
  }

  addStock(quantity: number): boolean {
    this.stock += quantity;
    console.info("Product quantity increased on stock");
    return true;
  }

  reduceStock(quantity: number): boolean {
    this.stock -= quantity;
    console.info("Product quantity reduced on stock");
    return true;
  }
}

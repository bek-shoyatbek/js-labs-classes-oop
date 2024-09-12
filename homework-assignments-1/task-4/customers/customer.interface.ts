import { Product } from "../products/product.service";

export interface ICustomer {
  addToCart(product: Product): boolean;
  removeFromCart(product: Product): boolean;
}

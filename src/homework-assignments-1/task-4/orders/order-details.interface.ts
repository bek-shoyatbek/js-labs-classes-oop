import { Customer } from "../customers/customer.service";
import { Product } from "../products/product.service";

export interface IOrderDetails {
  customer: Customer;
  products: Product[];
  totalPrice: number;
}

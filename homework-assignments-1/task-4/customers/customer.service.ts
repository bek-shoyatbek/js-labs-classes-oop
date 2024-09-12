import { Product } from "../products/product.service";
import { ICustomer } from "./customer.interface";
import { ICustomerDetails } from "./customer-details.interface";

export class Customer implements ICustomer {
  name: string;
  email: string;
  cart: Product[];
  address: string;
  constructor(customer: ICustomerDetails) {
    this.name = customer.name;
    this.email = customer.email;
    this.cart = customer.cart || [];
    this.address = customer.address;
  }
  addToCart(product: Product): boolean {
    throw new Error("Method not implemented.");
  }
  removeFromCart(product: Product): boolean {
    throw new Error("Method not implemented.");
  }
}

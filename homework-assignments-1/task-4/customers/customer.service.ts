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
    this.cart.push(product);
    return true;
  }
  removeFromCart(product: Product): boolean {
    const productIndex = this.cart.indexOf(product);
    if (productIndex > -1) {
      this.cart.splice(productIndex, 1);
      product.reduceStock(1);
      return true;
    } else {
      console.error("Product is not in the cart.");
      return false;
    }
  }
}

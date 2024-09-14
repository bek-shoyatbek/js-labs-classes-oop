import { ICustomer } from "../customers/customer.interface";
import { Product } from "../products/product.service";
import { IOrder } from "./order.interface";
import { IOrderDetails } from "./order-details.interface";
import { Customer } from "../customers/customer.service";

export abstract class Order implements IOrder {
  customer: Customer;
  products: Product[];
  totalPrice: number;

  constructor(order: IOrderDetails) {
    this.customer = order.customer;
    this.products = order.products;
    this.totalPrice = order.totalPrice;
  }
  calculateTotalPrice(): number {
    this.products.forEach((product) => {
      this.totalPrice += product.getPrice();
    });

    return this.totalPrice;
  }
}

import { Customer } from "../../customers/customer.service";
import { Product } from "../../products/product.service";
import { Order } from "../order.service";

export class DigitalOrder extends Order {
  customer: Customer;
  products: Product[];
  totalPrice: number;
  constructor(digitalOrder: Order) {
    super(digitalOrder);
    this.customer = digitalOrder.customer;
    this.products = digitalOrder.products;
    this.totalPrice = digitalOrder.totalPrice;
  }

  calculateTotalPrice(): number {
    this.products.forEach((product) => {
      this.totalPrice += product.getPrice();
    });
    return this.totalPrice;
  }
}

import { Customer } from "../../customers/customer.service";
import { Product } from "../../products/product.service";
import { Order } from "../order.service";

export class PhysicalOrder extends Order {
  shippingAddress: string;
  deliveryDate: number;
  constructor(customer: Customer, cart: Product[]) {
    super({
      customer,
      products: cart,
      totalPrice: 0,
    });

    this.shippingAddress = customer.address;
    this.deliveryDate = new Date().getDate();
    this.products = cart;
  }

  calculateTotalPrice(): number {
    this.products.forEach((product) => {
      this.totalPrice += product.getPrice();
    });
    return this.totalPrice;
  }
}

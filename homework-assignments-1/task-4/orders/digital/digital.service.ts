import { ICustomer } from "../../customers/customer.interface";
import { IProduct } from "../../products/product.interface";
import { IOrder } from "../order.interface";
import { Order } from "../order.service";

export class DigitalOrder extends Order {
    customer: ICustomer;
    products: IProduct[];
    totalPrice: number;
    constructor(digitalOrder: IOrder) {
        super(digitalOrder);
        this.customer = digitalOrder.customer;
        this.products = digitalOrder.products;
        this.totalPrice = digitalOrder.totalPrice;
    }

    calculateTotalPrice(): number {
        this.products.forEach(product => {
            this.totalPrice += product.price;
        })
        return this.totalPrice;
    }
}

import { ICustomer } from "../customers/customer.interface";
import { IProduct } from "../products/product.interface";
import { IOrder } from "./order.interface";

export abstract class Order implements IOrder {
    customer: ICustomer;
    products: IProduct[];
    totalPrice: number;

    constructor(order: IOrder) {
        this.customer = order.customer;
        this.products = order.products;
        this.totalPrice = order.totalPrice;
    }
    calculateTotalPrice(): number {
        this.products.forEach(product => {
            this.totalPrice += product.price;
        })

        return this.totalPrice;
    }
}


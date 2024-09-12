import { IProduct } from "../products/product.interface";
import { ICustomer } from "./customer.interface";

export class Customer implements ICustomer {
    name: string;
    email: string;
    cart: IProduct[];
    address: string;
    constructor(customer: ICustomer) {
        this.name = customer.name;
        this.email = customer.email;
        this.cart = customer.cart;
        this.address = customer.address;
    }
    addToCart(product: IProduct): boolean {
        throw new Error("Method not implemented.");
    }
    removeFromCart(product: IProduct): boolean {
        throw new Error("Method not implemented.");
    }

}
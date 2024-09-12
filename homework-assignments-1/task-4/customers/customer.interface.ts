import { IProduct } from "../products/product.interface";

export interface ICustomer {
    name: string;
    email: string;
    cart: IProduct[];
    address: string;

    addToCart(product: IProduct): boolean;
    removeFromCart(product: IProduct): boolean;
}
import { ICustomer } from "../customers/customer.interface";
import { IProduct } from "../products/product.interface";

export interface IOrder {
    customer: ICustomer;
    products: IProduct[];
    totalPrice: number;
    calculateTotalPrice(): number;
}
import { ICustomer } from "../../customers/customer.interface";
import { IProduct } from "../../products/product.interface";
import { Order } from "../order.service";
import { IPhysicalOrder } from "./physical.interface";

export class PhysicalOrder extends Order {
    customer: ICustomer;
    products: IProduct[];
    totalPrice: number;
    shippingAddress: string;
    deliveryDate: Date;
    constructor(physicalOrder: IPhysicalOrder) {
        super(physicalOrder);
        this.customer = physicalOrder.customer;
        this.products = physicalOrder.products;
        this.totalPrice = physicalOrder.totalPrice;
        this.shippingAddress = physicalOrder.shippingAddress;
        this.deliveryDate = physicalOrder.deliveryDate;
    }

    calculateTotalPrice(): number {
        this.products.forEach(product => {
            this.totalPrice += product.price;
        })
        return this.totalPrice;
    }
}
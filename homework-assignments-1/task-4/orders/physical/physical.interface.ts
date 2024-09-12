import { IOrder } from "../order.interface";

export interface IPhysicalOrder extends IOrder {
    shippingAddress: string;
    deliveryDate: Date;
}
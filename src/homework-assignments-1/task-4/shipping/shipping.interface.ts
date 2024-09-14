import { IOrder } from "../orders/order.interface";

export interface IShippingService {
    shipOrder(order: IOrder): boolean;
}
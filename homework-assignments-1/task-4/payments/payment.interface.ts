import { IOrder } from "../orders/order.interface";

export interface IPayment {
    amount: number;
    order: IOrder;
    processPayment(): boolean;
}
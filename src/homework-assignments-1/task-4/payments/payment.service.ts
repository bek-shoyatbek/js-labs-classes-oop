import { IOrder } from "../orders/order.interface";
import { IPayment } from "./payment.interface";

export abstract class Payment implements IPayment {
    amount: number;
    order: IOrder;
    constructor(amount: number, order: IOrder) {
        this.amount = amount;
        this.order = order;
    }
    processPayment(): boolean {
        return true;
    }
}
import { IOrder } from "../../orders/order.interface";
import { IShippingService } from "../shipping.interface";
import { IEmailShippingService } from "./email.interface";

export class EmailDeliveryService implements IShippingService {
    emailAddress: string;
    constructor(order: IEmailShippingService) {
        this.emailAddress = order.emailAddress;
    }
    shipOrder(order: IOrder): boolean {
        console.info("Order delivered by Email!");
        console.info("Order details: ");
        console.table(order);
        return true;
    }
}
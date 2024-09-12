import { IOrder } from "../../orders/order.interface";
import { IShippingService } from "../shipping.interface";

export class CourierShippingService implements IShippingService {
    order: IOrder;
    constructor(order: IOrder) {
        this.order = order;
    }

    shipOrder(order: IOrder): boolean {
        console.info("Courier shipped your order!");
        console.info("Order details:")
        console.table(order);
        return true;
    }
}
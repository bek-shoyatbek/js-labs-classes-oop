import { IOrder } from "../../orders/order.interface";
import { Order } from "../../orders/order.service";
import { IShippingService } from "../shipping.interface";

export class CourierShippingService implements IShippingService {
  constructor() {}

  shipOrder(order: Order): boolean {
    console.info("Courier shipped your order!");
    console.info("Order details:");
    console.table(order);
    return true;
  }
}

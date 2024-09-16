import { IOrderDetails } from "../order-details.interface";
import { IOrder } from "../order.interface";

export interface IPhysicalOrderDetails extends IOrderDetails {
  shippingAddress: string;
  deliveryDate: number;
}

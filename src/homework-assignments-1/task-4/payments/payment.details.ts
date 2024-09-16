import { Order } from "../orders/order.service";

export interface IPaymentDetails {
  amount: number;
  order: Order;
}

import { IPaymentDetails } from "../payment.details";

export interface IPayPalPaymentDetails extends IPaymentDetails {
  email: string;
  password: string;
}

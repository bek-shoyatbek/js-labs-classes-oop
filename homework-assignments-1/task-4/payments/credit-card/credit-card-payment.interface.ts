import { IPaymentDetails } from "../payment.details";

export interface ICreditCardPaymentDetails extends IPaymentDetails {
  cardNumber: string;
  expirationDate: string;
}

import { IPayment } from "../payment.interface";

export interface ICreditCardPayment extends IPayment {
    cardNumber: number;
    expirationDate: Date;
}
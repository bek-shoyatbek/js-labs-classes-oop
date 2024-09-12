import { IPayment } from "../payment.interface";

export interface IPayPalPayment extends IPayment {
    email: string;
    password: string;
}
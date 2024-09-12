import { Payment } from "../payment.service";
import { IPayPalPayment } from "./paypal.interface";

export class PayPalPayment extends Payment {
    email: string;
    password: string;
    constructor(payPalPaymentParams: IPayPalPayment) {
        super(payPalPaymentParams.amount, payPalPaymentParams.order);
        this.email = payPalPaymentParams.email;
        this.password = payPalPaymentParams.password;
    }

    processPayment(): boolean {
        console.info("Paid successfully by PayPal");
        console.info("Order details:")
        console.table(this.order);
        return true;
    }
}
import { Payment } from "../payment.service";
import { ICreditCardPayment } from "./credit-card-payment.interface";

export class CreditCardPayment extends Payment {
    cardNumber: number;
    expirationDate: Date;

    constructor(creditCardPaymentParams: ICreditCardPayment) {
        super(creditCardPaymentParams.amount, creditCardPaymentParams.order)
        this.cardNumber = creditCardPaymentParams.cardNumber;
        this.expirationDate = creditCardPaymentParams.expirationDate;
    }

    processPayment(): boolean {
        console.info("Paid successfully by credit card");
        console.info("Order details:")
        console.table(this.order);
        return true;
    }
}
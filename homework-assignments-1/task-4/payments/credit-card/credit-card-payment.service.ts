import { Payment } from "../payment.service";
import { ICreditCardPaymentDetails } from "./credit-card-payment.interface";

export class CreditCardPayment extends Payment {
  cardNumber: string;
  expirationDate: string;

  constructor(creditCardPaymentParams: ICreditCardPaymentDetails) {
    super(creditCardPaymentParams.amount, creditCardPaymentParams.order);
    this.cardNumber = creditCardPaymentParams.cardNumber;
    this.expirationDate = creditCardPaymentParams.expirationDate;
  }

  processPayment(): boolean {
    console.info("Paid successfully by credit card");
    console.info("Order details:");
    console.table(this.order);
    return true;
  }
}

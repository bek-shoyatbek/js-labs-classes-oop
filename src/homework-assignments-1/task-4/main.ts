import { Customer } from "./customers/customer.service";
import { PhysicalOrder } from "./orders/physical/physical.service";
import { CreditCardPayment } from "./payments/credit-card/credit-card-payment.service";
import { Product } from "./products/product.service";
import { CourierShippingService } from "./shipping/courier/courier.service";

// Create a customer
const customer = new Customer({
  name: "John Doe",
  email: "john@example.com",
  address: "123 Main St",
});

// Create products
const phone = new Product({ name: "Smartphone", price: 699, stock: 10 });
const ebook = new Product({ name: "Ebook", price: 29, stock: 100 });

// Add products to the cart
customer.addToCart(phone);
customer.addToCart(ebook);

// Create an order
let order = new PhysicalOrder(customer, customer.cart);
order.calculateTotalPrice();

// Process payment
let payment = new CreditCardPayment({
  amount: order.totalPrice,
  order,
  cardNumber: "1234-5678-9876-5432",
  expirationDate: "12/25",
});
payment.processPayment();

// Ship the order
let shippingService = new CourierShippingService();
shippingService.shipOrder(order);

import { Customer } from "./customers/customer.service";

// Create a customer
const customer = new Customer("John Doe", "john@example.com", "123 Main St");

// Create products
const phone = new Product("Smartphone", 699, 10);
const ebook = new Product("Ebook", 29, 100);

// Add products to the cart
customer.addToCart(phone);
customer.addToCart(ebook);

// Create an order
let order = new PhysicalOrder(customer, customer.cart);
order.calculateTotalPrice();

// Process payment
let payment = new CreditCardPayment(
    order.totalPrice,
    order,
    "1234-5678-9876-5432",
    "12/25"
);
payment.processPayment();

// Ship the order
let shippingService = new CourierShipping();
shippingService.shipOrder(order);
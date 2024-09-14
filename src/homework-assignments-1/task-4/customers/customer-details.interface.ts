import { Product } from "../products/product.service";

export interface ICustomerDetails {
  name: string;
  email: string;
  cart?: Product[];
  address: string;
}

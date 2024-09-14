import { IShippingService } from "../shipping.interface";

export interface IEmailShippingService extends IShippingService {
    emailAddress: string;
}
import { IShippingService } from "../shipping.interface";

export interface ICourierService extends IShippingService {
    courierName?: string;
}
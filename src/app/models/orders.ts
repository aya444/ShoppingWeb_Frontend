import {Customer} from "./customer";
import {Shippingcompany} from "./shippingcompany";

export class Orders {
  id!: number;
  productNames!: string;
  status!: string;
  customerId!: number;
  address!: string;
  shippingId?: number;
  shippingName?: string;
  shippingcompany?: Shippingcompany;
  customer!: Customer;
  productId!: number;

}

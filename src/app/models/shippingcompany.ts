import {Orders} from "./orders";
import {Regions} from "./regions";

export class Shippingcompany {
  id!: number;
  username!: string;
  password!: string;
  regions?: Regions[];
  orders?: Orders[];
}

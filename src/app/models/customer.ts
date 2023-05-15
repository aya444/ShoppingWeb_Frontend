import {Orders} from "./orders";

export class Customer {
  custId?: number;
  custName!: string;
  custEmail!: string;
  custPassword!: string;
  custState?: string;
  orders?: Orders[];
}

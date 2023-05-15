import { Sellingcompany } from "./sellingcompany";


export class Product {
  id!: number;
  name!: string;
  price!: number;
  status!: string;
  sellingcompanyId!: number;
  sellingcompany!: Sellingcompany;
}

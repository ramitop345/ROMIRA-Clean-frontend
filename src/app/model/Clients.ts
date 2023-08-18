import { ServiceStatuses } from "./ServiceStatuses";
import { ServicesCatalog } from "./ServicesCatalog";

export class Clients{
  public name: string | undefined;
  public city: string | undefined;
  public phoneNumber: string | undefined;
  public dealDate: Date | undefined;
  public askedServices: ServicesCatalog | undefined;
  public actualStatus: ServiceStatuses | undefined;
  public facturation: string | undefined;
}

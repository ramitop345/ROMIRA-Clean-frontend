import { ServiceStatuses } from "./ServiceStatuses";
import { ServicesCatalog } from "./ServicesCatalog";

export class Clients{
  public name: string = "";
  public city: string = "";
  public phoneNumber: string = "";
  public dealDate: Date = new Date();
  public askedServices: ServicesCatalog[] = Array<ServicesCatalog>();
  public actualStatus: ServiceStatuses = ServiceStatuses.PLANED;
  public facturation: string = "";
}

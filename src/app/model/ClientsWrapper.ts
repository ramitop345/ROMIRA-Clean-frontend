import { Clients } from "./Clients"

export class ClientsWrapper{
  public CLIENTS_ID: string = "clients"
  public clients: { [key: string]: Clients} = {};
}

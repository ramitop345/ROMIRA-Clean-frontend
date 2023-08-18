import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientsWrapper } from 'src/app/model/ClientsWrapper';

@Injectable({
  providedIn: 'root'
})
export class ClientsStorageService {

  constructor(private http: HttpClient) {
   }

  uri = 'https://localhost:44334/api/ClientsStorage';

  public LoadClients(): Observable<ClientsWrapper>{
    return this.http.get<ClientsWrapper>(this.uri);
  }

  SaveClientsData(clients: ClientsWrapper): Observable<ClientsWrapper> {
    return this.http.post<ClientsWrapper>(this.uri, clients);
  }
}

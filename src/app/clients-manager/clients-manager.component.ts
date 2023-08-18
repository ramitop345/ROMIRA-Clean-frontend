import { Component, OnInit } from '@angular/core';
import { ClientsStorageService } from '../services/clientsStorageService/clients-storage.service';
import { ClientsWrapper } from '../model/ClientsWrapper';

@Component({
  selector: 'app-clients-manager',
  templateUrl: './clients-manager.component.html',
  styleUrls: ['./clients-manager.component.sass']
})
export class ClientsManagerComponent implements OnInit{
  constructor(private clientsStorageService: ClientsStorageService){}

  ngOnInit(): void {
      this.LoadClients();
  }

  clientsData: ClientsWrapper | undefined;

  LoadClients(): void{
    this.clientsStorageService.LoadClients().subscribe(
      data => { this.clientsData = data;
        console.log(data);
      },
      error => {
        console.error('Error Loading data:', error);
      }
    );
  }

  SaveClientsData(): void{
    if (this.clientsData != undefined)
    this.clientsStorageService.SaveClientsData(this.clientsData).subscribe(
      response => {
        console.log('Data posted successfully:', response);
      },
      error => {
        console.error('Error posting data:', error);
      }
    );
  }

}

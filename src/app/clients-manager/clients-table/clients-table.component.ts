import { Component, Input, OnInit } from '@angular/core';
import { Clients } from 'src/app/model/Clients';
import { ServiceStatuses } from 'src/app/model/ServiceStatuses';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.sass']
})
export class ClientsTableComponent implements OnInit{
  constructor(){
    this.minDate = new Date(new Date().getFullYear()-4,0,1);
  }

  ngOnInit(): void {
    this.RefreshDisplay();
  }

  @Input() ClientsData: {[key: string]: Clients} = {};
  ClientsDataArray: { key: string, value: Clients }[] = [];
  displayedColumns: string[] = ['Move','Client-ID', 'Name', 'Phone Number', 'City', 'Appointment Date', 'Services', 'Status', 'Price','Delete'];
  minDate: Date;
  dealStatuses: string[] = Object.values(ServiceStatuses);

  GetNextKey():string{
    var key: string = "client ";
    var count: number = 0;
    while (key+count in this.ClientsData){
      count++;
    }
    return key+count;
  }

  AddNewClient(){
    this.ClientsData[this.GetNextKey()] = new Clients();
    this.ngOnInit();
  }

  DeleteClient(key: string){
    delete this.ClientsData[key];
    this.ngOnInit();
  }

  RefreshDisplay():void{
    if (this.ClientsData){
      this.ClientsDataArray = Object.entries(this.ClientsData).map(([key, value]) => ({ key, value }));
    }
  }
}

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
  @Input() ClientsData: {[key: string]: Clients} = {};
  ClientsDataArray: { key: string, value: Clients }[] = [];
  displayedColumns: string[] = ['Move','Client-ID', 'Name', 'Phone Number', 'City', 'Appointment Date', 'Services', 'Status', 'Price','Delete'];
  minDate: Date;
  dealStatuses: string[] = Object.values(ServiceStatuses);

  RefreshDisplay():void{
    if (this.ClientsData != null){
      this.ClientsDataArray = Object.entries(this.ClientsData).map(([key, value]) => ({ key, value }));
      console.log(this.ClientsData);
      console.log(this.ClientsDataArray);
    }
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.RefreshDisplay();
    },2000);
  }


}

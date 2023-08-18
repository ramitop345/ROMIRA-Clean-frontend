import { Component, Input, OnInit } from '@angular/core';
import { Clients } from 'src/app/model/Clients';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.sass']
})
export class ClientsTableComponent implements OnInit{
  @Input() ClientsData: {[key: string]: Clients} = {};
  ClientsDataArray: { key: string, value: Clients }[] = [];
  displayedColumns: string[] = ['Client-ID', 'Name', 'Phone Number', 'City', 'Appointment Date', 'Services', 'Status', 'Price'];

  RefreshDisplay():void{
    if (this.ClientsData != null){
      this.ClientsDataArray = Object.entries(this.ClientsData).map(([key, value]) => ({ key, value }));
      console.log(this.ClientsData);
      console.log(this.ClientsDataArray);
    }
  }

  ngOnInit(): void {
      this.RefreshDisplay();
  }


}

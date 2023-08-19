import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clients } from 'src/app/model/Clients';
import { ServiceStatuses } from 'src/app/model/ServiceStatuses';
import { ServicesCatalog } from 'src/app/model/ServicesCatalog';

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
  @Output() saveChanges: EventEmitter<any> = new EventEmitter();
  ClientsDataArray: { key: string, value: Clients }[] = [];
  displayedColumns: string[] = ['Move','Client-ID', 'Name', 'Phone Number', 'City', 'Appointment Date', 'Services', 'Status', 'Price','Delete'];
  minDate: Date;
  dealStatuses: string[] = Object.values(ServiceStatuses);
  servicesCatalogValues = Object.values(ServicesCatalog);

  GetNextKey():string{
    var key: string = "client ";
    var count: number = 0;
    while (key+count in this.ClientsData){
      count++;
    }
    return key+count;
  }

  addService(askedServices: ServicesCatalog[]) {
    askedServices.push(ServicesCatalog.NONE);
  }

  removeService(index: number, key: string): void {
    this.ClientsData[key].askedServices.splice(index, 1);
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

  SaveChanges(){
    this.saveChanges.emit();
  }
}

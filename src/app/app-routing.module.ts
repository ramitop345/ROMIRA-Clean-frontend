import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsManagerComponent } from './clients-manager/clients-manager.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:'clients', component: ClientsManagerComponent}
  //{path:"**", component: ClientsManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

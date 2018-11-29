import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { ViewVehiclesComponent } from './view-vehicles/view-vehicles.component';
import { VehicleDataService } from './services/vehicle-data.service';
import { NewVehicleComponent } from './new-vehicle/new-vehicle.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { EditVehicleComponent } from './edit-vehicle/edit-vehicle.component';
import { HelpInformationComponent } from './help-information/help-information.component';
import { PreStartChecklistComponent } from './pre-start-checklist/pre-start-checklist.component';

const myRoutes : Routes = [
  { path : 'new-vehicle', component : NewVehicleComponent},
  { path : 'view-vehicles', component : ViewVehiclesComponent},
  { path : 'delete-vehicle', component :  DeleteVehicleComponent},
  { path : 'edit-vehicle', component : EditVehicleComponent},
  { path : 'help-information', component : HelpInformationComponent},
  { path : 'pre-start-checklist', component : PreStartChecklistComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HelpComponent,
    ViewVehiclesComponent,
    NewVehicleComponent,
    DeleteVehicleComponent,
    EditVehicleComponent,
    HelpInformationComponent,
    PreStartChecklistComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
  ],
  exports: [ FormsModule,ReactiveFormsModule,
  RouterModule],
  providers: [VehicleDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

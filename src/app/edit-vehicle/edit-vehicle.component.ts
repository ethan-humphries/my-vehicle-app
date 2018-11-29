import { Component, OnInit } from '@angular/core';
import { VehicleDataService } from '../services/vehicle-data.service';
import { Vehicle } from '../classes/Vehicle.class';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})

export class EditVehicleComponent implements OnInit {
  message : string = "";
  submitted : boolean =  false;
  vehicles : Vehicle[];
  vehicle :  Vehicle = {
    registration: '',
    make: '',
    model: '',
    transmission: '',
    bodyShape: '',
    year: null,
  }

  constructor(private dataService: VehicleDataService) { }

  ngOnInit() {
    this.vehicles = this.dataService.getVehicles();
  }


  updateVehicle(vehicle : Vehicle){
    let index : number = this.vehicles.findIndex(x => x.registration == this.vehicle.registration);
    this.vehicles.splice(index, 1, this.vehicle);
    this.message = "Vehicle Updated: "
    this.submitted =  !this.submitted;
  }

  reset() : void {
    this.message = "";
    this.submitted =  false;
  }

}

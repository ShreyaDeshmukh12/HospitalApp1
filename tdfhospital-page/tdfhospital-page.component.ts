import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-tdfhospital-page',
  templateUrl: './tdfhospital-page.component.html',
  styleUrls: ['./tdfhospital-page.component.css']
})
export class TDFHospitalPageComponent {

  __hospitalService:HospitalOperationsService;
c:Hospital = new Hospital(1,'Tata','Dermatologist',5000,10,'Pune','','');

  constructor(hospitalService:HospitalOperationsService)
  {
    this.__hospitalService = hospitalService;
  }
  doFormSubmit()
  {
    console.log("form submit button clicked ")
    console.log(this.c);
    
  }


}

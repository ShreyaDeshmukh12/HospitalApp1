import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent {
  __hospitalService:HospitalOperationsService;

  constructor(hospitalService:HospitalOperationsService)
  {
    this.__hospitalService = hospitalService;
  }

  readHospital(hospitalId:string,hospitalName:string,speciality:string,price:string,discount:string,city:string,about:string,image:string)
  {
      console.log(hospitalId+" "+hospitalName+"  "+speciality+" "+price+" "+discount+"  "+city+" "+about+" "+image);
      let hospitalFromUser:Hospital = new Hospital(parseInt(hospitalId),hospitalName,speciality,parseInt(price),parseInt(discount),city,image,about);
      this.__hospitalService.addHospital(hospitalFromUser);
  }


}


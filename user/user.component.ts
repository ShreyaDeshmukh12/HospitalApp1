import { Component } from '@angular/core';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  __hospitalService:HospitalOperationsService; // creating object of Service layer

  
  allHospital : Array<Hospital> = [];
  watchList : Array<Hospital> = [];
  watchlistCount:number=0 ;

  priceHighCss:string = "color:crimson";
  priceLowCss:string = "color:rgb(8, 112, 63);font-weight: 700;";
  priceNormalCSS:string = "color:black";

  constructor(hospitalService:HospitalOperationsService)
  {
    this.__hospitalService = hospitalService;
    this.allHospital = this.__hospitalService.getHospitalArr();
  }


  

  goForAppoinment(hospital:string)
  {
    let hospitalId = parseInt(hospital)
    console.log(" code to appoinment "+hospitalId+" hospital");
    
  }

  addWatchlist(hospital:string)
  {
    let addHospitalId = parseInt(hospital);
    
    this.allHospital.forEach(c=>{
      if(c.hospitalId == addHospitalId)
      {
        this.watchList.push(c);
        
      }
    });
    this.watchlistCount = this.watchList.length;
    console.log(this.watchList);
    
  }

  getFilterData1(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allHospital = this.__hospitalService.getHospitalBySpeciality(filterValue);
  }
  getFilterData2(filterValue:string)
  {
    console.log(" Filter Value "+filterValue);

    this.allHospital = this.__hospitalService.getHospitalByCity(filterValue);
  }
}


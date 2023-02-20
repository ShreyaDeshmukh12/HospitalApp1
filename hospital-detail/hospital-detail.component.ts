import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Hospital } from '../hospital';
import { HospitalOperationsService } from '../hospital-operations.service';

@Component({
  selector: 'app-hospital-detail',
  templateUrl: './hospital-detail.component.html',
  styleUrls: ['./hospital-detail.component.css']
})
export class HospitalDetailComponent {
  __hospitalService:HospitalOperationsService; // creating object of Service layer
  router:Router;
  activeRoute:ActivatedRoute;
  c:Hospital = new Hospital(0,'','',0,0,'','','');
    constructor(hospitalService:HospitalOperationsService,router:Router,activeRoute:ActivatedRoute)
  {
    this.__hospitalService = hospitalService;
    this.router = router;
    this.activeRoute = activeRoute;

    let searchHospitalId= this.activeRoute.snapshot.params['cid']; // extract value from prameter(URI)
    console.log(searchHospitalId);
    this.c = this.__hospitalService.getHospitalByNumber(searchHospitalId); // get data from service class
    console.log(this.c);
  }
}
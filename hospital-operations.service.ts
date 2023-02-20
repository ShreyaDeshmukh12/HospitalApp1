import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
@Injectable({
  providedIn: 'root'

  
})
export class HospitalOperationsService {
  endpoint:String = 'https://jsonplaceholder.typicode.com/posts';
  baseURL = 'http://localhost:2021';
  hospitalByIdEndPoint:string = this.baseURL+'/app/hospital?city=Pune';
  allCourseEndpoint = this.baseURL+'/app/hospitals';
  
 hospitalArr:Hospital[] = [];

  constructor() { }
 


  addHospital(hospitalFromUser:Hospital)
  {
    
    this.hospitalArr.push(hospitalFromUser); 
    console.log("Inside Hospital Service : Hospital Added "+hospitalFromUser.hospitalId);
    console.log(" Total Hospital Are :- "+this.hospitalArr.length);
    
  }

  getHospitalArr():Hospital[]
  {
    return this.hospitalArr;
  }
  getHospitalByNumber(searchHospitaltId:number):Hospital
  {
    let outputHospital:Hospital = new Hospital(0,'','',0,0,'','','');
    for(let i=0;i<this.hospitalArr.length;i++)
    {
      let thisHospital:Hospital = this.hospitalArr[i];
        if(thisHospital.hospitalId == searchHospitaltId)
        {
          outputHospital = thisHospital;
          break;
        }
    }
    
    return outputHospital;
  }


  getHospitalBySpeciality(filterSpeciality:string):Hospital[]
  {
    // localhost:8080/api/hospital/{speciality}
   let outputArr:Hospital[] = [];

    this.hospitalArr.forEach(c=>{
      if(c.speciality == filterSpeciality)
      {
        outputArr.push(c);
      }
    });

    return outputArr;
  }
  getHospitalByCity(filterCity:string):Hospital[]
  {
    // localhost:8080/api/hospital/{city}
   let outputArr:Hospital[] = [];

    this.hospitalArr.forEach(c=>{
      if(c.city == filterCity)
      {
        outputArr.push(c);
      }
    });

    return outputArr;
  }
}

export class Hospital {
    hospitalId:number;
    hospitalName:string;
    speciality:string;
    price:number;
    discount:number;
    city:string;
    image:string;
    about:string;
  

    

    constructor(
    hospitalId:number,
    hospitalName:string,
    speciality:string,
    price:number,
    discount:number,
    city:string,
    image:string,
    about:string
    
    )
    {
          this.hospitalId = hospitalId;
          this.hospitalName = hospitalName;
          this.speciality = speciality;
          this.price = price;
          this.discount = discount;
          this.city = city;
          this.image = image;
          this.about = about;
          
    }
}


export class HospitalDTO {
    hospitalId: number;
    hospitalName: string;
    speciality: string;
    price: number;
    discount: number;
    city: string;


    constructor(
        hospitalId: number,
        hospitalName: string,
        speciality: string,
        price: number,
        discount: number,
        city: string,
    ) {
        this.hospitalId = hospitalId;
        this.hospitalName = hospitalName;
        this.speciality = speciality;
        this.price = price;
        this.discount = discount;
        this.city = city;
    }
}
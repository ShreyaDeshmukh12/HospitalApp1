import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { UserComponent } from './user/user.component';
import { DescriptionPipe } from './description-pipe';
import { HospitalDetailComponent } from './hospital-detail/hospital-detail.component';
import { TechnicalBootcampsComponent } from './technical-bootcamps/technical-bootcamps.component';
import { UpcomingHospitalsComponent } from './upcoming-hospitals/upcoming-hospitals.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { RouterModule,Routes } from '@angular/router';
import { InfoPipe } from './info-pipe';
import { TDFHospitalPageComponent } from './tdfhospital-page/tdfhospital-page.component';
import { FormsModule } from '@angular/forms';

const allLinks:Routes = [
  {path:'launchhospital',component:AdminWorkComponent},
  {path:'hospitals',component:UserComponent},
  {path:'upcominghospitals',component:UpcomingHospitalsComponent},
  {path:'workshop',component:WorkshopComponent},
  {path:'bootcamp',component:TechnicalBootcampsComponent},
  {path:'hospitallDetail/:cid',component:HospitalDetailComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminWorkComponent,
    UserComponent,
    DescriptionPipe,
    HospitalDetailComponent,
    TechnicalBootcampsComponent,
    UpcomingHospitalsComponent,
    WorkshopComponent,
    InfoPipe,
    TDFHospitalPageComponent

  ],
  imports: [
   
    BrowserModule,RouterModule.forRoot(allLinks),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

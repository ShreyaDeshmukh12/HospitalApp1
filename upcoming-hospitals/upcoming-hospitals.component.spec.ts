import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingHospitalsComponent } from './upcoming-hospitals.component';

describe('UpcomingHospitalsComponent', () => {
  let component: UpcomingHospitalsComponent;
  let fixture: ComponentFixture<UpcomingHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingHospitalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpcomingHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

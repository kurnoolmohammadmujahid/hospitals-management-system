import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalExpensesComponent } from './hospital-expenses.component';

describe('HospitalExpensesComponent', () => {
  let component: HospitalExpensesComponent;
  let fixture: ComponentFixture<HospitalExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospitalExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

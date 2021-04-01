import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankManagementComponent } from './blood-bank-management.component';

describe('BloodBankManagementComponent', () => {
  let component: BloodBankManagementComponent;
  let fixture: ComponentFixture<BloodBankManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodBankManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

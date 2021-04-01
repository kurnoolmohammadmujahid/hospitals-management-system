import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonorDetailsFormComponent } from './donor-details-form.component';

describe('DonorDetailsFormComponent', () => {
  let component: DonorDetailsFormComponent;
  let fixture: ComponentFixture<DonorDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonorDetailsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

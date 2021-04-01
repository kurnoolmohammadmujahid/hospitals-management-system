import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseRecordsComponent } from './expense-records.component';

describe('ExpenseRecordsComponent', () => {
  let component: ExpenseRecordsComponent;
  let fixture: ComponentFixture<ExpenseRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseRecordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

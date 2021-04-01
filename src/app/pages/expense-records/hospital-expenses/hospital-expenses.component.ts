import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServerService } from '../../../services/api-server.service';

@Component({
  selector: 'app-hospital-expenses',
  templateUrl: './hospital-expenses.component.html',
  styleUrls: ['./hospital-expenses.component.scss']
})
export class HospitalExpensesComponent implements OnInit {
  hospitalExpensesForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.hospitalExpensesForm = this.fb.group({
      expensesCategory: ['', Validators.required],
      ownerShipTakenBy: ['', Validators.required],
      amount: ['', Validators.required],
      comments: ['', Validators.required],
      dateTime: [''],
      status: ['Pending']
    });
  }

  updateExpensesData() {
    this.hospitalExpensesForm.patchValue({ dateTime: new Date().toLocaleString() })
    this.apiCall.postHospitalExpenses(this.hospitalExpensesForm.value).then(res => {
      console.log(res);
      this.route.navigate(['expense-data'])
    });
  }
}

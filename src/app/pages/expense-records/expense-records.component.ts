import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServerService } from '../../services/api-server.service';

@Component({
  selector: 'app-expense-records',
  templateUrl: './expense-records.component.html',
  styleUrls: ['./expense-records.component.scss']
})
export class ExpenseRecordsComponent implements OnInit {
  expensesLst: any;
  viewMoreDetailsObj = {
    'expensesCategory': '',
    'ownerShipTakenBy': '',
    'dateTime': '',
    'amount': '',
    'status': '',
    'comments': ''
  }
  id: any;
  constructor(private apiCall: ApiServerService) { }

  ngOnInit(): void {
    this.getExpensesList();
  }

  getExpensesList() {
    this.apiCall.getHospitalExpenses().then(res => {
      this.expensesLst = res;
    });
  }

  display: boolean = false;

  showDialog(showData) {
    this.display = true;
    this.viewMoreDetailsObj.expensesCategory = showData.expensesCategory;
    this.viewMoreDetailsObj.ownerShipTakenBy = showData.ownerShipTakenBy;
    this.viewMoreDetailsObj.dateTime = showData.dateTime;
    this.viewMoreDetailsObj.amount = showData.amount;
    this.viewMoreDetailsObj.status = showData.status;
    this.viewMoreDetailsObj.comments = showData.comments;
    this.id = showData.id;
  }

  settled() {
    this.viewMoreDetailsObj.status = "Settled";
    this.apiCall.updateHospitalExpensesById(this.id, this.viewMoreDetailsObj).then(res1 => {
      console.log(res1);
      this.display = false;
      this.getExpensesList();
    });
  }

}

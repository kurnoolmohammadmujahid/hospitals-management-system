import { Component, OnInit } from '@angular/core';
import { ApiServerService } from 'src/app/services/api-server.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.scss'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class StaffManagementComponent implements OnInit {
  products = [];
  constructor(private apiCall: ApiServerService) { }

  ngOnInit(): void {
    this.getExpensesList();
  }

  getExpensesList() {
    this.apiCall.getStaffDetails().then(res => {
      this.products = res;
    });
  }

}

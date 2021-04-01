import { Component, OnInit } from '@angular/core';
import { ApiServerService } from 'src/app/services/api-server.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-doctors-management',
  templateUrl: './doctors-management.component.html',
  styleUrls: ['./doctors-management.component.scss'],
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
export class DoctorsManagementComponent implements OnInit {
  products = [];
  constructor(private apiCall: ApiServerService) { }

  ngOnInit(): void {
    this.getExpensesList();
  }

  getExpensesList() {
    this.apiCall.getDoctorsDetails().then(res => {
      this.products = res;
    });
  }
}

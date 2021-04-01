import { Component, OnInit } from '@angular/core';
import { ApiServerService } from 'src/app/services/api-server.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-blood-bank-management',
  templateUrl: './blood-bank-management.component.html',
  styleUrls: ['./blood-bank-management.component.scss'],
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
export class BloodBankManagementComponent implements OnInit {
  products = [];
  constructor(private primengConfig: PrimeNGConfig,
    private apiCall: ApiServerService) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getExpensesList();
  }

  getExpensesList() {
    this.apiCall.getBloodDonationDetails().then(res => {
      this.products = res;
    });
  }
}

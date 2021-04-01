import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ExpenseRecordsRoutingModule } from './expense-records-routing.module';
import { ExpenseRecordsComponent } from './expense-records.component';
import { HospitalExpensesComponent } from './hospital-expenses/hospital-expenses.component';
import { ApiServerService } from 'src/app/services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    HospitalExpensesComponent,
    ExpenseRecordsComponent
  ],
  imports: [
    CommonModule,
    ExpenseRecordsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DashboardModule
  ],
  providers:[
    ApiServerService
  ]
})

export class ExpenseRecordsModule { }

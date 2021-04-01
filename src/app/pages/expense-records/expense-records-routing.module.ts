import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpenseRecordsComponent } from './expense-records.component';
import { HospitalExpensesComponent } from './hospital-expenses/hospital-expenses.component';

const routes: Routes = [
    {
        path: 'hospital-expenses',
        component: HospitalExpensesComponent
      },
      {
        path: 'expense-data',
        component: ExpenseRecordsComponent
      }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExpenseRecordsRoutingModule { }

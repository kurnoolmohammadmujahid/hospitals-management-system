import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodBankManagementComponent } from './blood-bank-management.component';
import { DonorDetailsFormComponent } from './donor-details-form/donor-details-form.component';

const routes: Routes = [
  {
    path: 'blood-bank-data',
    component: BloodBankManagementComponent
  },
  {
    path: 'donor-details',
    component: DonorDetailsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodBankManagementRoutingModule { }

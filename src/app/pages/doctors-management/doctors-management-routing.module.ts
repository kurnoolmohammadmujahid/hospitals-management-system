import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { DoctorsManagementComponent } from './doctors-management.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';

const routes: Routes = [
  {
    path: 'doctor-details',
    component: DoctorsManagementComponent
  },
  {
    path: 'add-doctor-details',
    component: AddDoctorComponent
  },
  {
    path: 'edit-doctor-details',
    component: EditDoctorComponent
  },
  {
    path: 'change-doctor-status',
    component: DeleteDoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsManagementRoutingModule { }

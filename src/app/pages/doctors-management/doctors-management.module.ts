import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { DoctorsManagementRoutingModule } from './doctors-management-routing.module';
import { DoctorsManagementComponent } from './doctors-management.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    DoctorsManagementComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    DeleteDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule,
    DashboardModule
  ],
  providers: [
    ApiServerService
  ]
})

export class DoctorsManagementModule { }

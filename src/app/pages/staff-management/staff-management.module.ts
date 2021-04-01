import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffManagementRoutingModule } from './staff-management-routing.module';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { DeleteStaffComponent } from './delete-staff/delete-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffManagementComponent } from './staff-management.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    StaffManagementComponent,
    EditStaffComponent,
    DeleteStaffComponent,
    AddStaffComponent,
  ],
  imports: [
    CommonModule,
    StaffManagementRoutingModule,
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

export class StaffManagementModule { }

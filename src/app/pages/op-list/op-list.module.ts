import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { OpListRoutingModule } from './op-list-routing.module';
import { OpListComponent } from './op-list.component';
import { PatientIntakeFormComponent } from './patient-intake-form/patient-intake-form.component';
import { TokenIncrementPipe } from '../../pipes/token-increment.pipe';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [
    PatientIntakeFormComponent,
    OpListComponent,
    TokenIncrementPipe
  ],
  imports: [
    CommonModule,
    OpListRoutingModule,
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

export class OpListModule { }

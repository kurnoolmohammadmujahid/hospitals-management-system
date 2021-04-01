import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ApiServerService } from '../../services/api-server.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from '../../shared/layout/layout.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RippleModule,
    DialogModule,
    ButtonModule,
    TableModule
  ],
  providers: [
    ApiServerService
  ]
})

export class DashboardModule { }

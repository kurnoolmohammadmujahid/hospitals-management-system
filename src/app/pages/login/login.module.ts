import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServerService } from '../../services/api-server.service';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [
    ApiServerService,
    MessageService
  ]
})

export class LoginModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServerService } from 'src/app/services/api-server.service';
import { MessageService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginObj = {
    email: '',
    password: ''
  }
  createForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) {
    this.createForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/\S/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W)/)]]
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    if (sessionStorage.getItem('email')) {
      this.route.navigate(['/dashboard']);
    } else {

    }
  }

  loginAuthentication() {
    this.loginObj.email = this.createForm.value.email;
    this.loginObj.password = this.createForm.value.password;
    this.apiCall.getLoginDetails().then(data => {
      console.log(data);
      for (let profile of data) {
        if (profile.email === this.loginObj.email && profile.password === this.loginObj.password) {
          sessionStorage.setItem('email', this.loginObj.email)
          this.route.navigate(['/dashboard']);
        } else {
          this.createForm.reset();
          this.messageService.add({ key: 'tc', severity: 'error', summary: 'Failed', detail: 'Unauthorized access. Invalid credentials' });
        }
      }
    });
  }
}



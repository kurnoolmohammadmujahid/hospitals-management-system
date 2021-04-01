import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';

@Component({
  selector: 'app-patient-intake-form',
  templateUrl: './patient-intake-form.component.html',
  styleUrls: ['./patient-intake-form.component.scss']
})
export class PatientIntakeFormComponent implements OnInit {
  patientIntakeForm: FormGroup;
  elem;
  print: boolean = false;
  name: any;
  address: any;
  city: any;
  state: any;
  pCode: any;
  dob: any;
  gender: any;
  phone: any;
  newToken: any;
  tokenGenerated: any;
  buttonRemove: boolean = false;

  constructor(@Inject(DOCUMENT) private document: any,
    private fb: FormBuilder,
    private apiCall: ApiServerService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    // this.openFullscreen();
  }

  createForm() {
    this.patientIntakeForm = this.fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pCode: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      phone: ['', Validators.required]
    });
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  /* Close fullscreen */
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }

  submit() {
    this.print = true;
    this.name = `${this.patientIntakeForm.value.fName} ${this.patientIntakeForm.value.lName}`;
    this.address = this.patientIntakeForm.value.address;
    this.city = this.patientIntakeForm.value.city;
    this.state = this.patientIntakeForm.value.state;
    this.pCode = this.patientIntakeForm.value.pCode;
    this.dob = this.patientIntakeForm.value.dob;
    this.gender = this.patientIntakeForm.value.gender;
    this.phone = this.patientIntakeForm.value.phone;
    this.openFullscreen();
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.apiCall.getPatientIntakeData().then(accData => {
      this.newToken = accData.pop();
      this.tokenGenerated = this.newToken.token ? this.newToken.token : '1';
    });
  }

  sendToken(token) {
    let data = token ? token : '0';
    let mul = parseInt(data);
    mul++;
    return mul.toString();
  }

  postDataFromServer() {
    let obj = {
      'name': this.name,
      'address': this.address,
      'city': this.city,
      'state': this.state,
      'pCode': this.pCode,
      'dob': this.dob,
      'gender': this.gender,
      'phone': this.phone,
      'token': this.sendToken(this.tokenGenerated),
      'dateTime': new Date().toLocaleString()
    };
    this.apiCall.postPatientIntakeData(obj).then(res => {
      console.log(res);
      window.print();
    });
  }

  sendDataApi() {
    this.buttonRemove = true;
    this.patientIntakeForm.reset();
    this.postDataFromServer();
  }

}

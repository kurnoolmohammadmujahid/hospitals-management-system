import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';

@Component({
  selector: 'app-patient-admission',
  templateUrl: './patient-admission.component.html',
  styleUrls: ['./patient-admission.component.scss']
})
export class PatientAdmissionComponent implements OnInit {
  patientAdmissionForm: FormGroup;
  elem;
  newToken: any;

  constructor(@Inject(DOCUMENT) private document: any,
    private fb: FormBuilder,
    private apiCall: ApiServerService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.getAdmissionID();
  }

  createForm() {
    this.patientAdmissionForm = this.fb.group({
      patientName: ['', Validators.required],
      admissionId: ['', Validators.required],
      admissionDate: ['', Validators.required],
      admissionTime: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      address: ['', Validators.required],
      status: ['Admitted', Validators.required],
      payment: ['Pending', Validators.required],
      symptoms: ['', Validators.required],
      pNumber: ['', Validators.required],
      marritalStatus: ['', Validators.required],
      occupation: ['', Validators.required],
      doctor: ['', Validators.required],
      bedNumber: ['', Validators.required]
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

  generateAdmissionId(token) {
    let temp = token.split("-");
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join("-");
  }

  getAdmissionID() {
    this.apiCall.getPatientsList().then(res => {
      this.newToken = res.pop();
      if (!this.newToken.admissionId) {
        this.patientAdmissionForm.patchValue({ admissionId: 'KMH-KNL-AP-1' })
      } else {
        this.patientAdmissionForm.patchValue({ admissionId: this.generateAdmissionId(this.newToken.admissionId) })
      }
    });
  }

  postAdmissionData() {
    this.apiCall.postPatientAdmitDetails(this.patientAdmissionForm.value).then(res1 => {
      console.log(res1);
      this.patientAdmissionForm.reset();
    });
  }



}

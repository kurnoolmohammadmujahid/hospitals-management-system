import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-discharge',
  templateUrl: './patient-discharge.component.html',
  styleUrls: ['./patient-discharge.component.scss']
})
export class PatientDischargeComponent implements OnInit {
  patientStatusUpdateForm: FormGroup;
  elem;
  admissionLst: any;
  viewMoreDetailsObj = {
    "patientName": "",
    "admissionId": "",
    "admissionDate": "",
    "admissionTime": "",
    "gender": "",
    "age": "",
    "address": "",
    "symptoms": "",
    "pNumber": "",
    "marritalStatus": "",
    "occupation": "",
    "doctor": "",
    "bedNumber": "",
    "status": "",
    "payment": "",
  }
  id: any;

  constructor(@Inject(DOCUMENT) private document: any,
    private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.getAdmissionsList();
  }

  createForm() {
    this.patientStatusUpdateForm = this.fb.group({
      admissionId: ['', Validators.required],
    });
  }

  getAdmissionsList() {
    this.apiCall.getPatientsList().then(res => {
      this.admissionLst = res;
    });
  }

  getAdmissionData() {
    for (let obj of this.admissionLst) {
      if (obj.admissionId == this.patientStatusUpdateForm.value.admissionId) {
        this.showDialog(obj);
      }
    }
  }

  display: boolean = false;

  showDialog(showData) {
    this.display = true;
    this.viewMoreDetailsObj.patientName = showData.patientName;
    this.viewMoreDetailsObj.admissionId = showData.admissionId;
    this.viewMoreDetailsObj.admissionDate = showData.admissionDate;
    this.viewMoreDetailsObj.admissionTime = showData.admissionTime;
    this.viewMoreDetailsObj.gender = showData.gender;
    this.viewMoreDetailsObj.age = showData.age;
    this.viewMoreDetailsObj.address = showData.address;
    this.viewMoreDetailsObj.symptoms = showData.symptoms;
    this.viewMoreDetailsObj.pNumber = showData.pNumber;
    this.viewMoreDetailsObj.marritalStatus = showData.marritalStatus;
    this.viewMoreDetailsObj.occupation = showData.occupation;
    this.viewMoreDetailsObj.doctor = showData.doctor;
    this.viewMoreDetailsObj.bedNumber = showData.bedNumber;
    this.viewMoreDetailsObj.status = showData.status;
    this.viewMoreDetailsObj.payment = showData.payment;
    this.id = showData.id;
  }

  patientStatusUpdateCall() {
    this.viewMoreDetailsObj.status = "Discharged";
    this.apiCall.updatePatientAdmitDetailsAsDischarge(this.id, this.viewMoreDetailsObj).then(res1 => {
      console.log(res1);
      this.route.navigate(['patient-data'])
    });
  }




}

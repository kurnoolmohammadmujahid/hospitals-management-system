import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ApiServerService } from '../../services/api-server.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {
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
  }

  constructor(@Inject(DOCUMENT) private document: any,
    private apiCall: ApiServerService) {
  }

  ngOnInit(): void {
    this.elem = document.documentElement;
    this.getAdmissionsList();
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

  getAdmissionsList() {
    this.apiCall.getPatientsList().then(res => {
      this.admissionLst = res;
    });
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
  }



}

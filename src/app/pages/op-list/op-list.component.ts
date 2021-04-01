import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ApiServerService } from '../../services/api-server.service';

@Component({
  selector: 'app-op-list',
  templateUrl: './op-list.component.html',
  styleUrls: ['./op-list.component.scss']
})
export class OpListComponent implements OnInit {
  elem;
  admissionLst: any;
  viewMoreDetailsObj = {
    'name': '',
    'token': '',
    'city': '',
    'state': '',
    'gender': '',
    'age': '',
    'address': '',
    'pCode': '',
    'phone': '',
    'dateTime': ''
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
    this.apiCall.getPatientIntakeData().then(res => {
      this.admissionLst = res;
    });
  }

  display: boolean = false;

  showDialog(showData) {
    this.display = true;
    this.viewMoreDetailsObj.name = showData.name;
    this.viewMoreDetailsObj.address = showData.address;
    this.viewMoreDetailsObj.city = showData.city;
    this.viewMoreDetailsObj.state = showData.state;
    this.viewMoreDetailsObj.pCode = showData.pCode;
    this.viewMoreDetailsObj.age = showData.dob;
    this.viewMoreDetailsObj.gender = showData.gender;
    this.viewMoreDetailsObj.phone = showData.phone;
    this.viewMoreDetailsObj.token = showData.token;
    this.viewMoreDetailsObj.dateTime = showData.dateTime;

  }
}

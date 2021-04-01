import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {
  editStaffForm: FormGroup;
  newToken: any;
  getStaffDetailsForm: FormGroup;
  staffLst: any;
  id: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getStaffID();
  }

  createForm() {
    this.getStaffDetailsForm = this.fb.group({
      staffId: ['', Validators.required],
    })
    this.editStaffForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      status: ['Active', Validators.required],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      staffId: ['', Validators.required]
    });
  }

  generateStaffId(token) {
    let temp = token.split("-");
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join("-");
  }

  getStaffID() {
    this.apiCall.getStaffDetails().then(res => {
      this.staffLst = res;
    });
  }

  postStaffDetails() {
    this.apiCall.updateStaffDetailsById(this.id, this.editStaffForm.value).then(res => {
      this.route.navigate(['staff-details'])
    });
  }

  display: boolean = false;
  viewMoreDetailsObj = {
    "name": "",
    "age": "",
    "status": "",
    "degree": "",
    "designation": "",
    "address": "",
    "phone": "",
    "gender": "",
    "staffId": "",
  }

  showDialog(showData) {
    this.display = true;
    this.editStaffForm.patchValue(showData);
    this.id = showData.id;
  }

  getStaffData() {
    for (let obj of this.staffLst) {
      if (obj.staffId == this.getStaffDetailsForm.value.staffId) {
        this.showDialog(obj);
      }
    }
  }


}

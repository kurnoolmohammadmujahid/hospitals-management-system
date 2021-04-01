import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.scss']
})
export class DeleteDoctorComponent implements OnInit {
  editDoctorForm: FormGroup;
  newToken: any;
  ChangeDoctorStatusForm: FormGroup;
  doctorsLst: any;
  id: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getDoctorID();
  }

  createForm() {
    this.ChangeDoctorStatusForm = this.fb.group({
      doctorId: ['', Validators.required],
    })
    this.editDoctorForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      status: ['Active', Validators.required],
      degree: ['', Validators.required],
      designation: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      doctorId: ['', Validators.required]
    });
  }

  generateDoctorId(token) {
    let temp = token.split("-");
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join("-");
  }

  getDoctorID() {
    this.apiCall.getDoctorsDetails().then(res => {
      this.doctorsLst = res;
    });
  }

  postDoctorDetails() {
    this.editDoctorForm.patchValue({ status: 'InActive' })
    this.apiCall.updateDoctorDetailsById(this.id, this.editDoctorForm.value).then(res => {
      this.route.navigate(['doctor-details'])
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
    "doctorId": "",
  }

  showDialog(showData) {
    this.display = true;
    this.editDoctorForm.patchValue(showData);
    this.viewMoreDetailsObj.name = showData.name;
    this.viewMoreDetailsObj.age = showData.age;
    this.viewMoreDetailsObj.status = showData.status;
    this.viewMoreDetailsObj.degree = showData.degree;
    this.viewMoreDetailsObj.designation = showData.designation;
    this.viewMoreDetailsObj.address = showData.address;
    this.viewMoreDetailsObj.phone = showData.phone;
    this.viewMoreDetailsObj.gender = showData.gender;
    this.viewMoreDetailsObj.doctorId = showData.doctorId;
    this.id = showData.id;
  }

  getDoctorData() {
    for (let obj of this.doctorsLst) {
      if (obj.doctorId == this.ChangeDoctorStatusForm.value.doctorId) {
        this.showDialog(obj);
      }
    }
  }


}

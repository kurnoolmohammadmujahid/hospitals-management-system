import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  addDoctorForm: FormGroup;
  newToken: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getDoctorID();
  }

  createForm() {
    this.addDoctorForm = this.fb.group({
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
      this.newToken = res.pop();
      if (!this.newToken.doctorId) {
        this.addDoctorForm.patchValue({ doctorId: 'KMH-DR-ID-1' })
      } else {
        this.addDoctorForm.patchValue({ doctorId: this.generateDoctorId(this.newToken.doctorId) })
      }
    });
  }

  postDoctorDetails() {
    this.apiCall.postDoctorsDetails(this.addDoctorForm.value).then(res => {
      this.route.navigate(['doctor-details'])
    });
  }

}

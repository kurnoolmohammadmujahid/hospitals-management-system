import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServerService } from '../../../services/api-server.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-donor-details-form',
  templateUrl: './donor-details-form.component.html',
  styleUrls: ['./donor-details-form.component.scss']
})
export class DonorDetailsFormComponent implements OnInit {
  donorDetailsForm: FormGroup;
  newToken: any;

  constructor(private fb: FormBuilder,
    private apiCall: ApiServerService,
    private route: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getDonorID();
  }

  createForm() {
    this.donorDetailsForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      donationDate: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      donorId: ['', Validators.required]
    });
  }

  generateDonorId(token) {
    let temp = token.split("-");
    let data = temp[3];
    let mul = parseInt(data);
    let convertValue = mul + 1;
    temp[3] = convertValue.toString();
    return temp.join("-");
  }

  getDonorID() {
    this.apiCall.getBloodDonationDetails().then(res => {
      this.newToken = res.pop();
      if (!this.newToken.donorId) {
        this.donorDetailsForm.patchValue({ donorId: 'KMH-BD-ID-1' })
      } else {
        this.donorDetailsForm.patchValue({ donorId: this.generateDonorId(this.newToken.donorId) })
      }
    });
  }

  postDonorDetails() {
    this.apiCall.postBloodDonorDetails(this.donorDetailsForm.value).then(res => {
      this.route.navigate(['blood-bank-data'])
    });
  }

}

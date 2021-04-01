import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServerService {
  url = environment.url;

  constructor(private http: HttpClient) { }

  getPatientIntakeData() {
    return this.http.get<any>(`${this.url}/patientIntakeDetails`)
      .toPromise()
      .then(data => { return data; });
  }

  postPatientIntakeData(intakeObj: object) {
    return this.http.post<any>(`${this.url}/patientIntakeDetails`, intakeObj)
      .toPromise()
      .then(data => { return data; });
  }

  getPatientsList() {
    return this.http.get<any>(`${this.url}/patientAdmissions`)
      .toPromise()
      .then(data => { return data; });
  }

  postPatientAdmitDetails(admissionObj: object) {
    return this.http.post<any>(`${this.url}/patientAdmissions`, admissionObj)
      .toPromise()
      .then(data => { return data; });
  }

  updatePatientAdmitDetailsAsDischarge(id: number, dischargeData: object) {
    return this.http.put<any>(`${this.url}/patientAdmissions/${id}`, dischargeData)
      .toPromise()
      .then(data => { return data; });
  }

  getHospitalExpenses() {
    return this.http.get<any>(`${this.url}/hospitalExpenses`)
      .toPromise()
      .then(data => { return data; });
  }

  postHospitalExpenses(expensesObj: object) {
    return this.http.post<any>(`${this.url}/hospitalExpenses`, expensesObj)
      .toPromise()
      .then(data => { return data; });
  }

  updateHospitalExpensesById(id: number, expenseData: object) {
    return this.http.put<any>(`${this.url}/hospitalExpenses/${id}`, expenseData)
      .toPromise()
      .then(data => { return data; });
  }

  updateDoctorDetailsById(id: number, editDoctorObj: object) {
    return this.http.put<any>(`${this.url}/doctorsDetails/${id}`, editDoctorObj)
      .toPromise()
      .then(data => { return data; });
  }

  getDoctorsDetails() {
    return this.http.get<any>(`${this.url}/doctorsDetails`)
      .toPromise()
      .then(data => { return data; });
  }

  postDoctorsDetails(addDoctorObj: object) {
    return this.http.post<any>(`${this.url}/doctorsDetails`, addDoctorObj)
      .toPromise()
      .then(data => { return data; });
  }

  updateStaffDetailsById(id: number, editStaffObj: object) {
    return this.http.put<any>(`${this.url}/staffDetails/${id}`, editStaffObj)
      .toPromise()
      .then(data => { return data; });
  }

  getStaffDetails() {
    return this.http.get<any>(`${this.url}/staffDetails`)
      .toPromise()
      .then(data => { return data; });
  }

  postStaffDetails(addStaffObj: object) {
    return this.http.post<any>(`${this.url}/staffDetails`, addStaffObj)
      .toPromise()
      .then(data => { return data; });
  }

  getBloodDonationDetails() {
    return this.http.get<any>(`${this.url}/bloodBankDonorDetails`)
      .toPromise()
      .then(data => { return data; });
  }

  postBloodDonorDetails(addDonorObj: object) {
    return this.http.post<any>(`${this.url}/bloodBankDonorDetails`, addDonorObj)
      .toPromise()
      .then(data => { return data; });
  }

  getLoginDetails() {
    return this.http.get<any>(`${this.url}/login`)
      .toPromise()
      .then(data => { return data; });
  }


}

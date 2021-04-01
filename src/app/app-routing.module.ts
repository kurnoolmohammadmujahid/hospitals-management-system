import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from './guard/session.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'staff-management',
    loadChildren: () => import('./pages/staff-management/staff-management.module').then(mod => mod.StaffManagementModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'patient-management',
    loadChildren: () => import('./pages/patients-list/patients-list.module').then(mod => mod.PatientsListModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'blood-bank-management',
    loadChildren: () => import('./pages/blood-bank-management/blood-bank-management.module').then(mod => mod.BloodBankManagementModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'expenses-management',
    loadChildren: () => import('./pages/expense-records/expense-records.module').then(mod => mod.ExpenseRecordsModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'op-management',
    loadChildren: () => import('./pages/op-list/op-list.module').then(mod => mod.OpListModule),
    canActivate: [SessionGuard]
  },
  {
    path: 'doctors-management',
    loadChildren: () => import('./pages/doctors-management/doctors-management.module').then(mod => mod.DoctorsManagementModule),
    canActivate: [SessionGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

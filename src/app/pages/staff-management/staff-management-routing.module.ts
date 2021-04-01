import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { DeleteStaffComponent } from './delete-staff/delete-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { StaffManagementComponent } from './staff-management.component';

const routes: Routes = [
    {
        path: 'staff-details',
        component: StaffManagementComponent
    },
    {
        path: 'add-staff-details',
        component: AddStaffComponent
    },
    {
        path: 'edit-staff-details',
        component: EditStaffComponent
    },
    {
        path: 'change-staff-status',
        component: DeleteStaffComponent
    },
    ,
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StaffManagementRoutingModule { }

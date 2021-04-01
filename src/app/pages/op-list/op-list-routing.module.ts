import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpListComponent } from './op-list.component';
import { PatientIntakeFormComponent } from './patient-intake-form/patient-intake-form.component';

const routes: Routes = [
    {
        path: 'patient-in-form',
        component: PatientIntakeFormComponent
    },
    {
        path: 'op-data',
        component: OpListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OpListRoutingModule { }

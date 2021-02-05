import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoleManagerComponent } from './role-manager/role-manager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { CategoryComponent } from './category/category.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { CategorylistComponent } from './category/categorylist/categorylist.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'role-manager',
    component: RoleManagerComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'doctor',
    component: DoctorComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path: 'patient',
    component: PatientComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'category/new_category',
    component: CategoryComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'speciality',
    component: SpecialityComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'category/categories',
    component: CategorylistComponent,

  },
  {
    path: 'server-error',
    component: ServerErrorComponent,

  },
  {
    path: 'not-found',
    component: NotFoundComponent,

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

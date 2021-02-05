import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoleManagerComponent } from './role-manager/role-manager.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DoctorComponent } from './doctor/doctor.component';
import { PatientComponent } from './patient/patient.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DashboardServoceService } from 'src/Services/dashboard-servoce.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorServiceService } from 'src/Services/doctor-service.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { CategoryComponent } from './category/category.component';
import { SpecialityComponent } from './speciality/speciality.component';
import { CategoryModule } from './category/category.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpecialityModule } from './speciality/speciality.module';
import { ServerErrorComponent } from './server-error/server-error.component';
import { ErrorInterceptor } from './Interceptor/errors.intrceptores';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoleManagerComponent,
    LoginComponent,
    RegisterComponent,
    DoctorComponent,
    PatientComponent,
    AppointmentsComponent,
    HeaderComponent,
    CategoryComponent,
    SpecialityComponent,
    ServerErrorComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    CategoryModule,
    SpecialityModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    DashboardServoceService,
    DoctorServiceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

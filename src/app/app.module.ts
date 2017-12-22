import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PatientListComponent } from './patients/patient-list/patient-list.component';
import { PatientsComponent } from './patients/patients.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    PatientsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

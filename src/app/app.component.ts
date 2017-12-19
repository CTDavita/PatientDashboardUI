import { Component } from '@angular/core';

import { Patients } from'./Patients';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patients: Patients[] = [new Patients('TestOne', 'PatientOne', new Date('02-20-1998'), 179827612, 'female'),
                          new Patients('Test', 'Patient', new Date('01-19-1977'), 178827612, 'male'),
                          new Patients('TestTwo', 'PatientTwo', new Date('11-21-1970'), 171227612, 'female')];
}

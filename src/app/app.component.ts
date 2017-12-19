import { Component } from '@angular/core';

import { Patient } from'./classes/Patient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patients: Patient[] = [new Patient('TestOne', 'PatientOne', new Date('02-20-1998'), 179827612, 'female'),
                          new Patient('Test', 'Patient', new Date('01-19-1977'), 178827612, 'male'),
                          new Patient('TestTwo', 'PatientTwo', new Date('11-21-1970'), 171227612, 'female')];
}

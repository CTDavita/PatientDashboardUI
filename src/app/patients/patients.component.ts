import { Component, OnInit } from '@angular/core';
import { Patient} from '../classes/patient';
import { PatientService } from '../services/patient.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService]
})
export class PatientsComponent implements OnInit {

  patients: Patient[];

  constructor(private patientService: PatientService) { }
  
    getPatients(): void {
      this.patientService.getPatients()
        .subscribe(
          patients=> {
            this.patients = patients;
            console.log('patients ::: '+this.patients);
          },
          err => {
            console.log('Something went wrong');
          }
        );

    }
  
    ngOnInit() {
     this.getPatients();
    }

}

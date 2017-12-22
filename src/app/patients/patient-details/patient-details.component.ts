import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Observable } from 'rxjs/Rx';
import { Medication } from '../../classes/Medication';
import { Allergy } from '../../classes/Allergy';
import { Patient} from '../../classes/Patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css'],
  providers:[PatientService]
})

export class PatientDetailsComponent implements OnInit {

  medications: Medication[];
  allergies: Allergy[];

  ngOnInit() {
  }
  
  constructor(private patientService: PatientService) { }

  getPatientMedications(): void {
    this.patientService.getPatientMedications()
      .subscribe(
        medications=> {
          this.medications = medications;
          console.log('medications ::: '+this.medications);
        },
        err => {
          console.log('Something went wrong');
        }
      );

  }

  getPatientAllergies(): void {
    this.patientService.getPatientAllergies()
      .subscribe(
        allergies=> {
          this.allergies = allergies;
          console.log('allergies ::: '+this.allergies);
        },
        err => {
          console.log('Something went wrong');
        }
      );

  }
}

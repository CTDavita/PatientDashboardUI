import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Patient } from '../classes/Patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @Input('patientObj') patient: Patient;

  constructor() { }

  ngOnInit() {
    //Get Patients Objects from webservice here...
  }

  showPatients(){
    console.log(this.patient.firstName);
  }

}

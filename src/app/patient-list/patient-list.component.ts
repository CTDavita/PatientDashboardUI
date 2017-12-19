import { Component, OnInit, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Patients } from '../Patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  @Input('patientObj') patient: Patients;

  constructor() { }

  ngOnInit() {
    //Get Patients Objects from webservice here...
  }

  showPatients(){
    console.log(this.patient.firstName);
  }

}

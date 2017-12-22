import { Injectable} from '@angular/core';
import { Patient } from '../classes/patient';
import { Http,Response } from '@angular/http';
//import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Allergy } from '../classes/Allergy';
import { Medication } from '../classes/Medication';


@Injectable()
export class PatientService {

  results: Patient[];

  private baseUrl: String =  'http://localhost:3000';

  constructor(private http: Http) { }

  getPatients() : Observable<Patient[]> {
   
  return this.http.get(this.baseUrl+'/patients')
      .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
 
  }

  getPatientAllergies() : Observable<Allergy[]> {
   
    return this.http.get(this.baseUrl+'/patients/:patientId/allergies')
        .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
   
    }

    getPatientMedications() : Observable<Medication[]> {
   
      return this.http.get(this.baseUrl+'/patients/:patientId/medications')
          .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
     
      }

}

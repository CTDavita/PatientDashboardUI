export class Patients{
    firstName: string;
    lastName: string;
    dob: Date;
    ssn: number;
    gender: string;

    constructor(ln: string, fn: string, dob: Date, ssn: number, gender: string){
        this.lastName = ln;
        this.firstName = fn;
        this.dob = dob;
        this.ssn = ssn;
        this.gender = gender;
    }

    showPatientDemographics(patient: Patients): any{

    }
}
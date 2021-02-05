import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/Services/patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  data: any;
  constructor(private service: PatientService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.service.GetPatient(token).subscribe(response => {
      this.data = response;
      console.warn(response);
    }, error => { alert(error.status); });

  }

}

import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Router, RouterStateSnapshot } from '@angular/router';

import { DoctorServiceService } from '../../Services/doctor-service.service';
import { state } from '@angular/animations';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  Data: any;
  LicenceStatus: boolean;
  token: string;
  status: any = [{
    "Id": "1",
    "name": "Approved"
  },
  {
    "Id": "2",
    "name": "InProcess"
  },
  {
    "Id": "3",
    "name": "Cancel"
  },
  ];

  constructor(private service: DoctorServiceService, private router: Router) { }
  verifyDoctor(code) {
    this.service.verifyDoctor(code, localStorage.getItem('token')).subscribe(response => {
      console.warn(response);
      this.LicenceStatus = response.isLicenceVerified;
    });


  }
  ChangeStatus(event, id) {
    this.service.ChangeStatus(parseInt(event.target.value), id, localStorage.getItem('token')).subscribe(response => {

      if (response.status == "success") {
        alert(response.message);
      }
      if(response.status=="401")
      {
        alert("aunathorized");
      }


    }, error => { alert(JSON.stringify(error)) })
  }
  GetDoctor(id) {
    this.service.GetDoctor(id).subscribe(response => {
      console.warn(response);
    }, error => {

      alert(error);
    });
  }
  ngOnInit(): void {
    // tslint:disable-next-line: no-debugger
    debugger;
    const token = localStorage.getItem('token');
    this.service.GetDoctors(token).subscribe(data => {

      this.Data = data;

      // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      if (error.status === 401) {
        this.router.navigate(['login']);
      }
    });
  }
}

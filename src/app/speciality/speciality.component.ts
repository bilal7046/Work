import { JsonpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpecialityService } from 'src/Services/speciality.service';

@Component({
  selector: 'app-speciality',
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.css']
})
export class SpecialityComponent implements OnInit {

  data: any;
  constructor(private service: SpecialityService) { }

  ngOnInit(): void {
    this.service.GetAllSpecialities(localStorage.getItem('token')).subscribe(
      response => { this.data = response; },
      error => { alert(JSON.stringify(error)); }
    );
  }


}

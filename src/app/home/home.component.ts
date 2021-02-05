import { Component, OnInit } from '@angular/core';
import {DashboardServoceService} from '../../Services/dashboard-servoce.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    Data: any;
  constructor(private service: DashboardServoceService) { }

  ngOnInit(): void {
    this.service.GetDashBoardData().subscribe(date => {
      this.Data = date;
    });
   }

}

import { Component, OnInit } from '@angular/core';
import { AppointmentsService } from '../../Services/appointments.service';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  Appointments: any;
  constructor(private service: AppointmentsService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.service.getAppointments(token).subscribe(response => {
      this.Appointments = response;
    }, error => { alert(error.text); });
  }

}

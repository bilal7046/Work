import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.css']
})
export class RoleManagerComponent implements OnInit {

  Data: any;
  UserStatus: boolean;


  constructor(private service: AccountService) { }
  onSubmit(data) {
    this.service.AddNewUser(data).subscribe(response => {
      if (response.status === 'success') {
        window.location.reload();
      }
    });

  }
  ActiveDeactiveAdmin(email) {
    this.service.BlockUnblockAdmin(email).subscribe(response => {
      if (response.user.isActive) {
        this.UserStatus = response.user.isActive;
      }
    });
  }
  DeleteAdmin(email) {
    this.service.DeleteAdmin(email).subscribe(response => {
      if (response.status === 'success') {
        window.location.reload();
      }
    });
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.service.GetAdminUsers(token).subscribe(response => {

      this.Data = response;
    });

  }

}

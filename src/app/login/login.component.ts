import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl: string;
  error: string;
  constructor(private service: AccountService, private router: Router, private route: ActivatedRoute) { }
  // tslint:disable-next-line: typedef
  login(data) {

    this.service.Login(data).subscribe(response => {
      debugger;
      console.warn(response);
      if (response.status === 'success') {

        localStorage.setItem('token', response.token);
        // tslint:disable-next-line: no-debugger
        debugger;
        // tslint:disable-next-line: triple-equals
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        }
        // if (response.isAcive) {
        //   this.router.navigate(['home']);
        // }
        else { this.router.navigate(['home']); }

      }
      else {
        this.error = response.error;

      }
    });
  }

  ngOnInit(): void {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

}

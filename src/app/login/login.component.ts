import { Component, OnInit } from '@angular/core';
// The custom Material Module
// import {CustomMaterialModule} from '../material/custom-material.module';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      this.router.navigate(['home']);
    });

  }
  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // go straight to main screen, just for developing
    if (this.authService.authenticated) {

      {
        this.router.navigate(['home']);
      }
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-ui-auth',
  templateUrl: './ui-auth.component.html',
  styleUrls: ['./ui-auth.component.scss']
})
export class UiAuthComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  logout() {
    this.authService.logout();
  }

}

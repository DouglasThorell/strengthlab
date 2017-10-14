import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}

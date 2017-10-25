import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {  }

}

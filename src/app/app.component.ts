import {Component} from '@angular/core';
import {NotificationService} from './notification.service';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {


  constructor(private notificationService: NotificationService, public snackBar: MdSnackBar) {
    this.notificationService.notification.subscribe(message => {this.snackBar.open(message, 'OK', {duration: 1500 })})
  }
}



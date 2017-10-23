import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  message: any;
  subscription: Subscription;

  constructor(private authService: AuthService,
              private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnInit() {
  }

}

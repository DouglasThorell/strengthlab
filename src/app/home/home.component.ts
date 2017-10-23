import {Component, DoCheck, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, DoCheck {

  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {

  }

  ngOnInit() {
  }

  ngDoCheck() {
    this.subscription = this.messageService.getMessage().subscribe(message => this.message = message)
  }

}

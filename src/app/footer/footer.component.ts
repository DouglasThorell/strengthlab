import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    // Sub to messages
    this.subscription = this.messageService.getMessage().subscribe(message => {this.message = message})
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

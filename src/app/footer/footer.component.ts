import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../message.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  constructor(private messageService: MessageService) {  }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}

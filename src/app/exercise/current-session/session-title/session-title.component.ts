import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {MessageService} from '../../../message.service';
import {Exercise} from '../../shared/exercise';

@Component({
  selector: 'app-session-title',
  templateUrl: './session-title.component.html',
  styleUrls: ['./session-title.component.scss']
})
export class SessionTitleComponent implements OnInit {

  @Input() title: string;
  subscription: Subscription;
  message: any;
  store: string;
  currentExercise: Exercise;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {this.message = message})
  }

  ngOnInit() {
    this.message = this.messageService.getMessage();
    this.store = this.messageService.getStore();
    this.currentExercise = this.messageService.getCurrentExercise();
  }

}

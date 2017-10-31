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
  subscription: Subscription;
  exerciseSubscription: Subscription;
  data: string;
  currentExercise: Exercise;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getData().subscribe(data => {this.data = data});
    this.exerciseSubscription = this.messageService.getExercise().subscribe(exercise => {this.currentExercise = exercise})
  }

  ngOnInit() {  }

}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Exercise} from '../shared/exercise';
import {Observable} from 'rxjs/Observable';
import {ExerciseService} from '../shared/exercise.service';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MessageService} from '../../message.service';

@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.scss'],
})
export class CurrentSessionComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  data: string;

  constructor(private exerciseService: ExerciseService,
              private route: ActivatedRoute,
              private messageService: MessageService) {
              this.subscription = this.messageService.getData().subscribe(data => {this.data = data})
  }

  ngOnInit() {  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

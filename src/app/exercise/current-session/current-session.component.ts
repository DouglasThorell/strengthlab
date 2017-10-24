import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Exercise} from '../shared/exercise';
import {Observable} from 'rxjs/Observable';
import {ExerciseService} from '../shared/exercise.service';
import {CurrentSessionService} from './current-session-service';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MessageService} from '../../message.service';
import {SessionTitleComponent} from "./session-title/session-title.component";

@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.scss'],
  // providers: [CurrentSessionService]
})
export class CurrentSessionComponent implements OnInit, OnDestroy {

  currentExercise = 'no exercise selected';
  subscription: Subscription;
  value: string; // Debugging
  id: string;
  exercise$: Observable<any>;
  message: string;
  sub: Subscription;

  @Input() exercise: string; // clean up

  constructor(private exerciseService: ExerciseService,
              private currentSessionService: CurrentSessionService,
              private route: ActivatedRoute,
              private messageService: MessageService) { // this is not really used right now, fix
    // this.subscription = currentSessionService.getExercise().subscribe(exercise => {this.value = exercise})
              this.subscription = this.messageService.getMessage().subscribe(message => {this.message = message});
  }

  clearMessage() {
    this.messageService.clearMessage();
  }
  setMessage() {
    this.messageService.sendMessage('dummy');
  }

  doSubscribe() {
    this.subscription = this.messageService.getMessage().subscribe(message => {this.message = message; });
  }



  ngOnInit() {
      this.sub = this.currentSessionService.getExercise().subscribe(message => this.value = message);
      this.value = this.currentSessionService.getValue();
    // this.messageService.clearMessage();

   // this.message = this.messageService.getMessage().subscribe(message => {this.message = message});
   // this.currentExercise = this.route.snapshot.paramMap.get('id');
   // this.sub = this.route.params.subscribe(params => {
   //   this.currentExercise = params['id'];
   //   this.exercise$ = this.exerciseService.getExercise(this.id);
   //   this.exercise$.subscribe()
   // });

    // this.currentSessionService.confirmExercise(this.exercise);
    // console.log('currentSessionStoreVariable: ' + this.currentSessionService.store);
    // this.value = this.currentSessionService.store;

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // this.sub.unsubscribe();
  }

}

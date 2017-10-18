import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Exercise} from '../exercise/shared/exercise';
import {Observable} from 'rxjs/Observable';
import {ExerciseService} from '../exercise/shared/exercise.service';
import {CurrentSessionService} from './current-session-service';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-current-session',
  templateUrl: './current-session.component.html',
  styleUrls: ['./current-session.component.scss'],
  providers: [CurrentSessionService]
})
export class CurrentSessionComponent implements OnInit, OnDestroy {

  currentExercise = 'no exercise selected';
  subscription: Subscription;

  @Input() exercise: string;

  constructor(private exerciseService: ExerciseService,
              private currentSessionService: CurrentSessionService,
              private route: ActivatedRoute) {
    this.subscription = currentSessionService.currentExercise$.subscribe(currentExercise => {this.currentExercise = currentExercise});
    console.log(this.currentExercise);
  }

  ngOnInit() {
    this.currentExercise = this.route.snapshot.paramMap.get('id');

    this.currentSessionService.confirmExercise(this.exercise);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

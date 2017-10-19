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
  value: any; // Debugging
  private sub: any;
  id: string;
  exercise$: Observable<any>;

  @Input() exercise: string; // clean up

  constructor(private exerciseService: ExerciseService,
              private currentSessionService: CurrentSessionService,
              private route: ActivatedRoute) { // this is not really used right now, fix
    this.subscription = currentSessionService.currentExercise$.subscribe(currentExercise => {this.currentExercise = currentExercise});
    console.log(this.currentExercise);
  }

  ngOnInit() {
   // this.currentExercise = this.route.snapshot.paramMap.get('id');
    this.sub = this.route.params.subscribe(params => {
      this.currentExercise = params['id'];
      this.exercise$ = this.exerciseService.getExercise(this.id);
      this.exercise$.subscribe()
    });

    // this.currentSessionService.confirmExercise(this.exercise);
    // console.log('currentSessionStoreVariable: ' + this.currentSessionService.store);
    // this.value = this.currentSessionService.store;

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this.sub.unsubscribe();
  }

}

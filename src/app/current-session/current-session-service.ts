import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

// https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service

@Injectable()
export class CurrentSessionService {
  // Observable string source
  private currentExerciseSource = new Subject<string>();
  private currentSessionSource = new Subject<string>();

  // Observable string stream
  currentExercise$ = this.currentExerciseSource.asObservable();
  currentSession$ = this.currentExerciseSource.asObservable();

  // Service Message commands
  announceExercise(exercise: string) {
    console.log('current-session-service: ' + exercise)
    this.currentExerciseSource.next(exercise);
  }

  confirmExercise(set: string) {
    this.currentSessionSource.next(set)
  }

  constructor() { }

}

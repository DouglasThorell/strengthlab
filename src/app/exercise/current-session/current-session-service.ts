import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

// https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service

@Injectable()
export class CurrentSessionService {

  public store: string;
  // Observable string source
  private currentExercise = new Subject<any>();
  private currentSession = new Subject<any>();

  // Observable string stream
  public currentExercise$ = this.currentExercise.asObservable();
  public currentSession$ = this.currentSession.asObservable();

  // Service Message commands
  announceExercise(exercise: string) {
    console.log('current-session-service: ' + exercise)
    this.currentExercise.next({text: exercise});
  }

  confirmExercise(set: string) {
    this.currentSession.next(set)
  }

  getExercise(): Observable<any> {
    return this.currentExercise$;
  }

  clearExercise() {
    this.currentExercise.next();
  }

  constructor() { }

}

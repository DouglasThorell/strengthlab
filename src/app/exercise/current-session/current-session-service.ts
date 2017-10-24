import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {CurrentSessionState, initialState} from "./current-session-state";

// https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
// for now I am using the MessageService instead but leaving this service here as it could be
// useful within the feature model later.

@Injectable()
export class CurrentSessionService {

  private behaviorSubject: BehaviorSubject<CurrentSessionState> = new BehaviorSubject(initialState);

  // Observable string source
  private currentExercise = new Subject<any>();
  private currentSession = new Subject<any>();

  // Observable string stream
  public currentExercise$ = this.currentExercise.asObservable();
  public currentSession$ = this.currentSession.asObservable();

  getState() {
    return this.behaviorSubject.asObservable();
  }
  getValue(): string {
    return this.behaviorSubject.getValue().message
  }
  setState(message: string) {
    this.behaviorSubject.next({message: message})
  }
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

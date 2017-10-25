import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Exercise} from './exercise/shared/exercise';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

// This is a global message service defined att app-level. The rxjs subject works
// but not perfectly when switching routes. For that, use another variable or
// add more functions. UPDATE: Now using SubjectObservable!


@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  private store: string; // Added this because I couldn't get the observable to fully work when switching routes
  private exercise: Exercise;

  // SubjectObservable
  private behaviorSubject = new BehaviorSubject('initial value');

  // SubjectObservable Functions
  sendData(data: string) {
    this.behaviorSubject.next(data);
  }
  getData(): Observable<any> {
    return this.behaviorSubject.asObservable();
  }
  getDataValue(): string {
    return this.behaviorSubject.getValue();
  }

  // Subject Functions
  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
  setStore(store: string) {
    this.store = store;
  }
  // Store is just a variable if we run into problems with observables. Will be removed later
  getStore(): string {
    return this.store;
  }
  // Exercise Store, same as above
  setCurrentExercise(exercice: Exercise) {
    this.exercise = exercice;
  }
  getCurrentExercise(): Exercise {
    return this.exercise;
}
}

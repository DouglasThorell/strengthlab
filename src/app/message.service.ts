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

  private dummyExercise: Exercise = {
    $key: 'xx',
    name: 'no exercise',
    createdAt: 0,
    updatedAt: 0,
    id: '0',
    active: false
  };

  // SubjectObservable
  private behaviorSubject = new BehaviorSubject('initial value');
  // Testing with Object
  private exerciseBehaviorSubject = new BehaviorSubject(this.dummyExercise);

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
  // Exercise Specific (Yes it works to send objects using the msg-service. This is nice.)
  sendExercise(exercise: Exercise) {
    this.exerciseBehaviorSubject.next(exercise);
  }
  getExercise(): Observable<Exercise> {
    return this.exerciseBehaviorSubject;
  }
  getExerciseValue(): Exercise {
    return this.exerciseBehaviorSubject.getValue();
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

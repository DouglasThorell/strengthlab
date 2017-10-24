import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {Exercise} from './exercise/shared/exercise';

// This is a global message service defined att app-level. The rxjs subject works
// but not perfectly when switching routes. For that, use another variable or
// add more functions.

@Injectable()
export class MessageService {
  private subject = new Subject<any>();
  private store: string; // Added this because I couldn't get the observable to fully work when switching routes
  private exercise: Exercise;

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
  getStore(): string {
    return this.store;
  }
  setCurrentExercise(exercice: Exercise){
    this.exercise = exercice;
  }
  getCurrentExercise(): Exercise {
    return this.exercise;
}
}

import { Injectable } from '@angular/core';

// FireStore
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

// Our class exercise
import {Exercise} from './exercise';
// Auth
import {AuthService} from '../../shared/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';



@Injectable()
export class ExerciseService {

  exerciseCollection: AngularFirestoreCollection<Exercise>
  exercises: Observable<Exercise[]>

  constructor(private afs: AngularFirestore) {
    this.exerciseCollection = this.afs.collection<Exercise>('exercises');
    this.exercises = this.exerciseCollection.valueChanges();
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
  }


  getExerciseList() {
    return this.exercises;
  }

  deleteExercise($key: string) {
    return null;
  }

  updateExercise($key: string, exercise: Exercise) {
    return null;
  }

  createExercise(exercise: Exercise) {
    return;
  }
}


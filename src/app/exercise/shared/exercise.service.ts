import { Injectable } from '@angular/core';
// FireStore
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
// Our class exercise
import {Exercise} from './exercise';
// Observable, see changes for firestore vs realtime db
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../../shared/auth.service";
import {User} from "../../shared/user";
import {AngularFireAuth} from "angularfire2/auth";


@Injectable()
export class ExerciseService {

  exerciseCollection: AngularFirestoreCollection<Exercise>;
  exercises: Observable<Exercise[]>;
  error: string;
  userId: string;
  userExercise: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {this.userId = user.uid}
    });

    this.userExercise = afs.doc<any>('users/WFsddrth8RMeX1us3yQf');

    this.exerciseCollection = this.userExercise.collection<Exercise>('exercises');
    this.exercises = this.exerciseCollection.snapshotChanges()
      .map(actions => {return actions.map(action => {
        const data = action.payload.doc.data() as Exercise;
        const id = action.payload.doc.id;
        return {id, ...data};
      })});
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
    this.error = error;
  }


  getExerciseList() {
    return this.exercises;
  }

  deleteExercise(exercise: Exercise) {
    this.exerciseCollection.doc(exercise.id).delete()
      .then(result => {console.log(exercise.name + ' deleted')})
      .catch(error => {this.handleError(error)});
  }

  updateExercise(exercise: Exercise, name: string) {
    this.exerciseCollection.doc(exercise.id).update({name: name})
      .catch(error => this.handleError(error));
  }

  createExercise(exercise: Exercise) {
    this.exerciseCollection.add(<Exercise>{name: exercise.name})
      .then(result => {console.log(result.id + ' added to FireStore')}) // debugging
      .catch(error => this.handleError(error));
  }
}


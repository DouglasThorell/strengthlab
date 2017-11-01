import { Injectable } from '@angular/core';
// FireStore
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
// Our class exercise
import {Exercise} from './exercise';
// Observable, see changes for firestore vs realtime db
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../shared/auth.service';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from '../../shared/user';
import {NotificationService} from "../../notification.service";

@Injectable()
export class ExerciseService {

  exerciseCollection: AngularFirestoreCollection<Exercise>;
  exercises: Observable<Exercise[]>;
  error: string;
  uid: string;
  userExercise: AngularFirestoreDocument<any>;
  user: Observable<User>;
  authstate: any;

  constructor(private afs: AngularFirestore,
              public authService: AuthService,
              public afAuth: AngularFireAuth,
              private notificationService: NotificationService) {

    // get the user it from authservice, here WAS a problem =)
    this.user = afAuth.authState;
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {this.uid = user.uid};
      console.log('subscribe to af authstate: uid is: ' + this.uid);

      this.userExercise = afs.doc<any>(`users/${this.uid}`);
      // why this mess and not .valuechanges? then we get no metadata, sorry
      this.exerciseCollection = this.userExercise.collection<Exercise>('exercises');
      this.exercises = this.exerciseCollection.snapshotChanges()
        .map(actions => {return actions.map(action => {
          const data = action.payload.doc.data() as Exercise;
          const id = action.payload.doc.id;
          return {id, ...data};
        })});
    });
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error)
    this.error = error;
  }

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp()
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
    this.exerciseCollection.doc(exercise.id).update({name: name, updatedAt: this.timestamp})
      .catch(error => this.handleError(error));
  }

  updateExerciseTime(exercise: Exercise) {
    this.exerciseCollection.doc(exercise.id).update({usedAt: this.timestamp})
      .catch((error => this.handleError(error)));
  }

  createExercise(exercise: Exercise) {
    this.exerciseCollection.add(<Exercise>{name: exercise.name, createdAt: this.timestamp})
      .then(result => {
        console.log(result.id + ' added to FireStore');
        this.notificationService.notification.next(exercise.name + ' added to Database');
      }) // debugging
      .catch(error => this.handleError(error));
  }
  getExercise(id: string) {
    return this.userExercise.valueChanges()
  }
}


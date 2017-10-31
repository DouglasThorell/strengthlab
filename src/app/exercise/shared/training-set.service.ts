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
import {NotificationService} from '../../notification.service';
import {TrainingSet} from './training-set';
import {MessageService} from '../../message.service';

@Injectable()
export class TrainingSetService {

  setCollection: AngularFirestoreCollection<TrainingSet>;
  sets: Observable<TrainingSet[]>;
  error: string;
  uid: string;
  userExerciseSet: AngularFirestoreDocument<any>;
  user: Observable<User>;
  currentExercise: Observable<string>;

  constructor(private afs: AngularFirestore,
              public authService: AuthService,
              public afAuth: AngularFireAuth,
              private notificationService: NotificationService,
              private messageService: MessageService) {

    // get the user it from authservice, here WAS a problem =)
    this.user = afAuth.authState;
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {this.uid = user.uid}
      console.log('subscribe to af authstate: uid is: ' + this.uid);

      // get the current exercise
      this.messageService.getData().subscribe(data => {this.currentExercise = data});

      this.userExerciseSet = afs.doc<any>(`users/${this.uid}/exercises/${this.currentExercise}`);
      // why this mess and not .valuechanges? then we get no metadata, sorry
      this.setCollection = this.userExerciseSet.collection<TrainingSet>('trainingsets');
      this.sets = this.setCollection.snapshotChanges()
        .map(actions => {return actions.map(action => {
          const data = action.payload.doc.data() as TrainingSet;
          const id = action.payload.doc.id;
          return {id, ...data};
        })});
    });
  }
  // Default error handling for all actions
  private handleError(error) {
    console.log(error);
    this.error = error;
  }


  getTrainingSetList() {
    return this.sets;
  }

  deleteTrainingSet(trainingSet: TrainingSet) {
    this.setCollection.doc(trainingSet.id).delete()
      .then(result => {console.log(trainingSet.id + ' deleted')})
      .catch(error => {this.handleError(error)});
  }

  updateTrainingSet(trainingSet: TrainingSet, name: string) {
    this.setCollection.doc(trainingSet.id).update({name: name})
      .catch(error => this.handleError(error));
  }

  createTrainingSet(trainingSet: TrainingSet) {
    this.setCollection.add(<TrainingSet>{reps: trainingSet.reps, weight: trainingSet.weight})
      .then(result => {
        console.log(result.id + ' added to FireStore');
        this.notificationService.notification.next(trainingSet.id + ' added to Database');
      }) // debugging
      .catch(error => this.handleError(error));
  }
  getTrainingSet(id: string) {
    return this.userExerciseSet.valueChanges()
  }
}

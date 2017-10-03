import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {TrainingSet} from './training-set';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class TrainingSetService {

  private basePath = 'training-sets'

  trainingSet: FirebaseObjectObservable<TrainingSet> = null;
  trainingSets: FirebaseListObservable<TrainingSet[]> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {this.userId = user.uid}
    })
  }
  getTrainingSetList(): FirebaseListObservable<TrainingSet[]> {
    this.trainingSets = this.db.list(`this.basePath/$(this.userId)`);
    return this.trainingSets;
  }
  getTrainingSet(): FirebaseObjectObservable<TrainingSet> {
    return this.trainingSet;
  }

}

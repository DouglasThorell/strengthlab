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
  // Return list of sets that belongs to userId
  getTrainingSetList(query = {}): FirebaseListObservable<TrainingSet[]> {
    this.trainingSets = this.db.list(`${this.basePath}/${this.userId}`,
      {query: query});
    return this.trainingSets;
  }
  // Get single set with key $key that belongs to userId
  getTrainingSet(key: string): FirebaseObjectObservable<TrainingSet> {
    this.trainingSet = this.db.object(`${this.basePath}/${this.userId}/${key}`)
    return this.trainingSet;
  }
  // Create a set by pushing in a TrainingSet object
  createTrainingSet(trainingSet: TrainingSet) {
    this.trainingSets.push(trainingSet).then(result =>
      console.log('added new set')).catch(error => this.handleError(error)
    )
  }
  handleError(error: Error) {
    console.log(error);
  }

}

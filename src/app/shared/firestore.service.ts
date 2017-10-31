// This is a custom firestore service to increase readability and reduce code accross the app
// stay DRY and don't get WET! Not implemented or provided yet but will look into this later

import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from 'angularfire2/firestore';
@Injectable()
export class FirestoreService {
  constructor(private afs: AngularFirestore) {}

  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp()
  }
}


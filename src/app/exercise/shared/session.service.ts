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
import {Session} from './session';

@Injectable()
export class SessionService {

  sessionCollection: AngularFirestoreCollection<Session>;
  sessions: Observable<Session[]>;
  error: string;
  uid: string;
  userSession: AngularFirestoreDocument<any>;
  user: Observable<User>;
  authstate: any;

  constructor(private afs: AngularFirestore,
              public authService: AuthService,
              public afAuth: AngularFireAuth,
              private notificationService: NotificationService) {

    // get the user it from authservice, here WAS a problem =)
    this.user = afAuth.authState;
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {this.uid = user.uid}
      console.log('subscribe to af authstate: uid is: ' + this.uid);

      this.userSession = afs.doc<any>(`users/${this.uid}`);
      // why this mess and not .valuechanges? then we get no metadata, sorry
      this.sessionCollection = this.userSession.collection<Session>('sessions');
      this.sessions = this.sessionCollection.snapshotChanges()
        .map(actions => {return actions.map(action => {
          const data = action.payload.doc.data() as Session;
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


  getSessionList() {
    return this.sessions;
  }

  deleteSession(session: Session) {
    this.sessionCollection.doc(session.id).delete()
      .then(result => {console.log(session.id + ' deleted')})
      .catch(error => {this.handleError(error)});
  }

  updateSession(session: Session, name: string) {
    this.sessionCollection.doc(session.id).update({name: name})
      .catch(error => this.handleError(error));
  }

  createSession(session: Session) {
    this.sessionCollection.add(<Exercise>{name: session.name})
      .then(result => {
        console.log(result.id + ' added to FireStore');
        this.notificationService.notification.next(session.name + ' added to Database');
      }) // debugging
      .catch(error => this.handleError(error));
  }
  getSession(id: string) {
    return this.userSession.valueChanges()
  }
}



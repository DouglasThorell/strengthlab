import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {NotificationService} from "../notification.service";

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  broScientist?: string;
}

@Injectable()
export class AuthService {

  authState: any = null;
  userCollectionRef: AngularFirestoreCollection<User>;
  user: Observable<User>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router,
              private notificationService: NotificationService) {
    // Get authentication data, then map to FireStore Userdata
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) { return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
  }
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }
  // Return current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }
  // Returns authstate (look into this)
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }
  // Returns UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }
  // Anonymous
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Return Username or Guest if not logged in
  get currentUserDisplayName(): String {
    if (!this.authState) {return 'Guest'; }
    if (this.currentUserAnonymous) { return 'Anonymous'; }
    {return this.authState['displayName'] || 'No name'; }
  }

  // Various login functions

  loginWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  // Generic social login
  socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.authState = credential.user;
        this.updateUserData(credential.user);
        this.notificationService.notification.next('Welcome back ' + this.currentUser.displayName)
      })
      .catch(error => console.log(error));
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user
        this.updateUserData(user);
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData(user);
      })
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData(user);
      })
      .catch(error => console.log(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const auth = firebase.auth();

    return auth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch((error) => console.log(error));
  }


  // Sign Out
  logout() {
    this.afAuth.auth.signOut()
      .then(() => {this.router.navigate(['/'])})
      .then(() => {this.notificationService.notification.next('Successfully Signed Out')});
  }

  //// Helpers ////

  private updateUserData(user) {
    // when login, write to FireStore (this should fix issue #22)
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
  return userRef.set(data);
  }
}

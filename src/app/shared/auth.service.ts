import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {User} from './user';


@Injectable()
export class AuthService {

  authState: any = null;
  user: User;
  userCollectionRef: AngularFirestoreCollection<User>;
  user$: Observable<User[]>;

  constructor(private afAuth: AngularFireAuth,
              private afs: AngularFirestore,
              private router: Router
  ) {
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
    this.userCollectionRef = this.afs.collection<User>('users');
    this.user$ = this.userCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as User;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
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
  get currentUserId(): String {
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
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData();
      })
      .catch(error => console.log(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
        this.updateUserData();
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
  logout(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  //// Helpers ////

  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features
    const user = this.currentUserId;
    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    };

    this.userCollectionRef.doc(this.authState.currentUserId).set(data)
      .catch(error => console.log(error));

  }
}

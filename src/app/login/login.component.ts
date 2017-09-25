import { Component, OnInit, HostBinding } from '@angular/core';
import { AuthService} from '../shared/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = null;
  topics: FirebaseListObservable<any[]>;
  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }
  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
    this.topics = this.db.list('/topics');
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }

}

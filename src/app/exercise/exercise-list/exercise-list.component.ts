import {Component, OnInit} from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {Exercise} from '../shared/exercise';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../../shared/auth.service";
import {AngularFireAuth} from 'angularfire2/auth';
import {User} from 'firebase';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  exercises: Observable<Exercise[]>
  error: string;
  user: Observable<User>;
  username: String;
  userId: String;

  constructor(private exerciseService: ExerciseService, private authService: AuthService) { }

  ngOnInit() {
    // this.username = this.authService.currentUserDisplayName;
    // this.userId = this.authService.currentUserId;
    // console.log('authservice current user: ' + this.username);
    // console.log('authservice current userId: ' + this.userId);
    // console.log('current user exercise service: ' + this.exerciseService.currentUserId);
    this.exercises = this.exerciseService.getExerciseList();
    this.error = this.exerciseService.error;
  }

}

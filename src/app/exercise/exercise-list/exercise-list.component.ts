import {Component, OnInit} from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {Exercise} from '../shared/exercise';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../../shared/auth.service";
import {AngularFireAuth} from 'angularfire2/auth';
import {CurrentSessionComponent} from '../current-session/current-session.component'

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  exercises: Observable<Exercise[]>
  error: string;

  constructor(private exerciseService: ExerciseService, private authService: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getExerciseList();
    this.error = this.exerciseService.error;
  }

}

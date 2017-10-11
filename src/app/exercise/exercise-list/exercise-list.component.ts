import { Component, OnInit } from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {Exercise} from '../shared/exercise';
import {AngularFireList} from 'angularfire2/database';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  exercises: Observable<Exercise[]>;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getExerciseList();
  }

}

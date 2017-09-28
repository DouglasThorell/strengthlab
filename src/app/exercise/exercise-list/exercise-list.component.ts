import { Component, OnInit } from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {FirebaseListObservable} from 'angularfire2/database';
import {Exercise} from '../shared/exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss']
})
export class ExerciseListComponent implements OnInit {

  exercises: FirebaseListObservable<Exercise[]>;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.exercises = this.exerciseService.getExerciseList();
    this.exercises.subscribe()
  }

}

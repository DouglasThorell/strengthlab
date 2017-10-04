import { Component, OnInit } from '@angular/core';
import {Exercise} from '../shared/exercise';
import { ExerciseService} from '../shared/exercise.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.scss']
})
export class ExerciseFormComponent implements OnInit {
  exercise: Exercise = new Exercise();

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  createExercise() {
    this.exerciseService.createExercise(this.exercise)
    this.exercise = new Exercise()
  }

}

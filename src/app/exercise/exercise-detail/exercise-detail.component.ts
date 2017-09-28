import {Component, Input, OnInit} from '@angular/core';
import {ExerciseService} from '../shared/exercise.service';
import {Exercise} from '../shared/exercise';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.component.html',
  styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit {

  @Input() exercise: Exercise;

  constructor(private exerciseService: ExerciseService) { }

  ngOnInit() {
  }

  deleteExercise() {
    this.exerciseService.deleteExercise(this.exercise.$key)
  }

}

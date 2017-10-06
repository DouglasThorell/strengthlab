import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../shared/exercise";

@Component({
  selector: 'app-current-exercise',
  templateUrl: './current-exercise.component.html',
  styleUrls: ['./current-exercise.component.scss']
})
export class CurrentExerciseComponent implements OnInit {
  @Input() exercise: Exercise;
  exerciseName: String;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../shared/exercise";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-current-exercise',
  templateUrl: './current-exercise.component.html',
  styleUrls: ['./current-exercise.component.scss']
})
export class CurrentExerciseComponent implements OnInit {
  @Input() exercise: Exercise;
  exerciseName: String;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

}

import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Exercise} from '../shared/exercise';
import {ActivatedRoute} from '@angular/router';
import {TrainingSetService} from '../../training-set/training-set.service';

@Component({
  selector: 'app-current-exercise',
  templateUrl: './current-exercise.component.html',
  styleUrls: ['./current-exercise.component.scss']
})
export class CurrentExerciseComponent implements OnInit, OnDestroy {

  @Input() exercise: Exercise;

  exerciseName: String;
  private sub: any;

  constructor(
    private route: ActivatedRoute, private trainingSetService: TrainingSetService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.exerciseName = params['exerciseName']})
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

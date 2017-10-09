import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TrainingSetService} from '../training-set.service';
import {TrainingSet} from '../training-set';
import {Exercise} from '../../exercise/shared/exercise';
import {ActivatedRoute} from '@angular/router';
import {ExerciseService} from '../../exercise/shared/exercise.service';
import {Observable} from 'rxjs/Observable';
import {FirebaseObjectObservable} from "angularfire2/database";

@Component({
  selector: 'app-training-set-form',
  templateUrl: './training-set-form.component.html',
  styleUrls: ['./training-set-form.component.scss']
})
export class TrainingSetFormComponent implements OnInit, OnDestroy {

  // @Input() exercise: Exercise;
  trainingSet = new TrainingSet;
  private sub: any;
  exerciseKey: string;
  exercise: FirebaseObjectObservable<Exercise>; // not working so well this

  constructor(private trainingSetService: TrainingSetService, private route: ActivatedRoute, private exerciseService: ExerciseService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {this.exerciseKey = params['exerciseKey']});
    this.exercise = this.exerciseService.getExercise('exerciseKey') // not used, remove
  }

  createTrainingSet() {
    this.trainingSet.timeStamp = Date.now();
    this.trainingSet.exercise = this.exerciseKey;
    this.trainingSetService.createTrainingSet(this.trainingSet);
    this.trainingSet = new TrainingSet;
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {TrainingSetService} from '../training-set.service';
import {TrainingSet} from '../training-set';
import {Exercise} from '../../exercise/shared/exercise';

@Component({
  selector: 'app-training-set-form',
  templateUrl: './training-set-form.component.html',
  styleUrls: ['./training-set-form.component.scss']
})
export class TrainingSetFormComponent implements OnInit { // @Input() exercise: Exercise;
  trainingSet = new TrainingSet;
  @Input() exercise: Exercise;
  constructor(private trainingSetService: TrainingSetService) { }

  ngOnInit() {
  }
  createTrainingSet() {
    this.trainingSetService.createTrainingSet(this.trainingSet);
    this.trainingSet = new TrainingSet;
  }

}

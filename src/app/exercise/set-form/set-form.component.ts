import { Component, OnInit } from '@angular/core';
import { TrainingSet } from '../shared/training-set';
import {TrainingSetService} from '../shared/training-set.service';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent implements OnInit {

  trainingSet: TrainingSet = new TrainingSet();

  constructor(private trainingSetService: TrainingSetService) { }

  ngOnInit() {
  }
  createTrainingSet() {
    this.trainingSetService.createTrainingSet(this.trainingSet);
    this.trainingSet = new TrainingSet();
  }

}

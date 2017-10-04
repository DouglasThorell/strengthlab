import { Component, OnInit } from '@angular/core';
import {TrainingSetService} from '../training-set.service';
import {TrainingSet} from '../training-set';

@Component({
  selector: 'app-training-set-form',
  templateUrl: './training-set-form.component.html',
  styleUrls: ['./training-set-form.component.scss']
})
export class TrainingSetFormComponent implements OnInit {
  trainingSet = new TrainingSet;
  constructor(private trainingSetService: TrainingSetService) { }

  ngOnInit() {
  }
  createTrainingSet() {
    this.trainingSetService.createTrainingSet(this.trainingSet);
    this.trainingSet = new TrainingSet;
  }

}

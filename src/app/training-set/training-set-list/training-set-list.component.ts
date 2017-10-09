import {Component, Input, OnInit} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {TrainingSet} from '../training-set';
import {TrainingSetService} from '../training-set.service';
import {Exercise} from '../../exercise/shared/exercise';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-training-set-list',
  templateUrl: './training-set-list.component.html',
  styleUrls: ['./training-set-list.component.scss']
})
export class TrainingSetListComponent implements OnInit {
  @Input() exercise: Exercise; // Not sure if here or in training set detail

  trainingSets: FirebaseListObservable<TrainingSet[]>

  constructor(private trainingSetService: TrainingSetService) { }

  ngOnInit() {
    this.trainingSets = this.trainingSetService.getTrainingSetList();
    this.trainingSets.subscribe();
  }

}

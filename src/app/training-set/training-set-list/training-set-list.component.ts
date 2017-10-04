import { Component, OnInit } from '@angular/core';
import {FirebaseListObservable} from 'angularfire2/database';
import {TrainingSet} from '../training-set';
import {TrainingSetService} from '../training-set.service';

@Component({
  selector: 'app-training-set-list',
  templateUrl: './training-set-list.component.html',
  styleUrls: ['./training-set-list.component.scss']
})
export class TrainingSetListComponent implements OnInit {
  trainingSets: FirebaseListObservable<TrainingSet[]>

  constructor(private trainingSetService: TrainingSetService) { }

  ngOnInit() {
    this.trainingSets = this.trainingSetService.getTrainingSetList();
    this.trainingSets.subscribe();
  }

}

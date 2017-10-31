import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TrainingSet} from '../shared/training-set';
import {TrainingSetService} from '../shared/training-set.service';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {

  trainingSets: Observable<TrainingSet[]>;
  error: string;

  constructor(private trainingSetService: TrainingSetService) { }

  ngOnInit() {
    this.trainingSets = this.trainingSetService.getTrainingSetList();
    this.error = this.trainingSetService.error;
  }

}

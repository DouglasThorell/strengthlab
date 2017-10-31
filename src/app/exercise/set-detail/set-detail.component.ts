import {Component, Input, OnInit} from '@angular/core';
import {TrainingSet} from '../shared/training-set';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.scss']
})
export class SetDetailComponent implements OnInit {

  @Input() trainingSet: TrainingSet;

  constructor() { }

  ngOnInit() {
  }

}

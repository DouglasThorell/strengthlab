import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSetListComponent } from './training-set-list/training-set-list.component';
import { TrainingSetDetailComponent } from './training-set-detail/training-set-detail.component';
import { TrainingSetFormComponent } from './training-set-form/training-set-form.component';
import { TrainingSet } from './training-set';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrainingSet, TrainingSetListComponent, TrainingSetDetailComponent, TrainingSetFormComponent]
})
export class TrainingSetModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSetListComponent } from './training-set-list/training-set-list.component';
import { TrainingSetDetailComponent } from './training-set-detail/training-set-detail.component';
import { TrainingSetFormComponent } from './training-set-form/training-set-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrainingSetListComponent, TrainingSetDetailComponent, TrainingSetFormComponent]
})
export class TrainingSetModule { }

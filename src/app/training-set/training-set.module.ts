import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingSetListComponent } from './training-set-list/training-set-list.component';
import { TrainingSetDetailComponent } from './training-set-detail/training-set-detail.component';
import { TrainingSetFormComponent } from './training-set-form/training-set-form.component';
import {SharedModule} from '../shared/modules/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TrainingSetService} from './training-set.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [TrainingSetListComponent, TrainingSetDetailComponent, TrainingSetFormComponent],
  providers: [TrainingSetService]
})
export class TrainingSetModule { }

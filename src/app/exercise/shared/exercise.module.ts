// Angular core
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// Shared UI
import {SharedModule} from '../../shared/modules/shared.module';
// Firebase
import {AngularFireDatabaseModule} from 'angularfire2/database';
// Components for exercise module
import {ExerciseListComponent} from '../exercise-list/exercise-list.component';
import {ExerciseDetailComponent, ExerciseDetailDialogComponent} from '../exercise-detail/exercise-detail.component';
import {ExerciseFormComponent} from '../exercise-form/exercise-form.component';

// Forms, move to shared?
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// Services
import {ExerciseService} from './exercise.service';
import {TrainingSetService} from './training-set.service';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    ExerciseListComponent,
    ExerciseDetailComponent,
    ExerciseDetailDialogComponent,
    ExerciseFormComponent
  ],
  entryComponents: [
  ExerciseDetailDialogComponent
  ],
  providers: [
    ExerciseService,
    TrainingSetService
  ]
})

export class ExerciseModule { }

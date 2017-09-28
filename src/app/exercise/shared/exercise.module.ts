import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/modules/shared.module';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {ExerciseListComponent} from '../exercise-list/exercise-list.component';
import {ExerciseDetailComponent} from '../exercise-detail/exercise-detail.component';
import {ExerciseFormComponent} from '../exercise-form/exercise-form.component';
import {ExerciseService} from './exercise.service';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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
    ExerciseFormComponent
  ],
  providers: [
    ExerciseService
  ]
})

export class ExerciseModule { }

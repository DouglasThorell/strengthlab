// All main routing for the app

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {ExerciseListComponent} from './exercise/exercise-list/exercise-list.component';
import {TrainingSetFormComponent} from './training-set/training-set-form/training-set-form.component';
import {TrainingSetListComponent} from "./training-set/training-set-list/training-set-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'exercise-list', component: ExerciseListComponent},
  {path: 'training-set-list', component: TrainingSetListComponent}, // Testing
  {path: 'training-set-form', component: TrainingSetFormComponent} // This is only for testing
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true } )// <-- debugging purposes only
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

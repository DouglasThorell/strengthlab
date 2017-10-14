// All main routing for the app

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NgModule} from '@angular/core';
import {ExerciseListComponent} from './exercise/exercise-list/exercise-list.component';
import {ProfilePageComponent} from './profile-page/profile-page.component';
import {AuthGuard} from './shared/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'exercise-list', component: ExerciseListComponent, canActivate: [AuthGuard]},
  {path: 'profile-page', component: ProfilePageComponent, canActivate: [AuthGuard]}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false } )// <-- debugging purposes only
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}

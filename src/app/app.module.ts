// Core Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

// Angular fire
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'environments/environment';

// Authentication service
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

// Shared Module
import {SharedModule} from './shared/modules/shared.module';

// Our components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

// RoutingModule
import { AppRoutingModule } from './app-routing.module';
import { ExerciseDetailComponent } from './exercise/exercise-detail/exercise-detail.component';
import { ExerciseFormComponent } from './exercise/exercise-form/exercise-form.component';
import {ExerciseModule} from "./exercise/shared/exercise.module";




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    // Shared
    SharedModule,
    ExerciseModule,
    // Core
    BrowserModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(environment.firebase, 'strengthlab-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }


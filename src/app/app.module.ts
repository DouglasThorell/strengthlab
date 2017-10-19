// Core Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Other Modules
import {ExerciseModule} from './exercise/shared/exercise.module';

// AngularFire
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database'; // TODO: Move away from this
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';

// Import environment variables
import {environment} from 'environments/environment';

// Authentication service TODO: clean up
import { AuthService } from './shared/auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

// Shared Module
import {SharedModule} from './shared/modules/shared.module';

// RoutingModule
import {AppRoutingModule} from './app-routing.module';

// Our components
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {UiAuthComponent} from './ui-auth/ui-auth.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import {AuthGuard} from "./shared/auth.guard";
import { CurrentSessionComponent } from './current-session/current-session.component';
import { SessionTitleComponent } from './current-session/session-title/session-title.component';
import {CurrentSessionService} from "./current-session/current-session-service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UiAuthComponent,
    ProfilePageComponent,
    CurrentSessionComponent,
    SessionTitleComponent,
  ],
  imports: [
    // Shared
    SharedModule,
    // Work it baby
    ExerciseModule,
    BrowserAnimationsModule,
    // Core
    BrowserModule,
    FormsModule,
    HttpModule,
    // AngularFire
    AngularFireModule.initializeApp(environment.firebase, 'strengthlab-dev'),
    AngularFireDatabaseModule, // Realtime Database
    AngularFirestoreModule.enablePersistence(), // Firestore
    AngularFireAuthModule,
    // Routing
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, CurrentSessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

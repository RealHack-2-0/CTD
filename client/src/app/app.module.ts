import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { QuestionsComponent } from './questions/questions.component';
import { RatingComponent } from './Questions/rating/rating.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FlashMessagesModule } from 'angular2-flash-messages';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    QuestionsComponent,
    RatingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // FlashMessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

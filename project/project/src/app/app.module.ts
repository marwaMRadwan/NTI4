import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';
import { RegisterFormComponent } from './shared/register-form/register-form.component';
import { Err404Component } from './err404/err404.component';
import { AllproComponent } from './allpro/allpro.component';
import { SingleComponent } from './single/single.component';
import { UserInterceptor } from './user.interceptor';
import { ProfileComponent } from './shared/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent,
    RegisterFormComponent,
    Err404Component,
    AllproComponent,
    SingleComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
provide:HTTP_INTERCEPTORS,
useClass:UserInterceptor,
multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Directives2Component } from './directives2/directives2.component';
import { DataService } from './data.service';
import { AllDataComponent } from './all-data/all-data.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { UserFormComponent } from './shared/user-form/user-form.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    Directives2Component,
    AllDataComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    AllUsersComponent,
    UserFormComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

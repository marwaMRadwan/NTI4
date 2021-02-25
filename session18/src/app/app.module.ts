import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AddComponent } from './pages/tasks/add/add.component';
import { ShowComponent } from './pages/tasks/show/show.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './shared/nav/nav.component';
import { SliderComponent } from './shared/slider/slider.component';
import { ServicesComponent } from './shared/services/services.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JsonComponent } from './pages/json/json.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { UserInterceptor } from './user.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddComponent,
    ShowComponent,
    IndexComponent,
    NavComponent,
    SliderComponent,
    ServicesComponent,
    FooterComponent,
    JsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    PaginationModule.forRoot(),
    NgxPaginationModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:UserInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

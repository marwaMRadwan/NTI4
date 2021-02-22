import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PlaygroundComponent } from './playground/playground.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';
import { FormBuilderexComponent } from './form-builderex/form-builderex.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PlaygroundComponent,
    RegisterComponent,
    ReactiveExampleComponent,
    FormBuilderexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

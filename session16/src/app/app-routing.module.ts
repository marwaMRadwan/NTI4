import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBuilderexComponent } from './form-builderex/form-builderex.component';
import { ParentComponent } from './parent/parent.component';
import { PlaygroundComponent } from './playground/playground.component';
import { ReactiveExampleComponent } from './reactive-example/reactive-example.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component:ParentComponent},
  {path:"test", component:PlaygroundComponent},
  {path:"register", component:RegisterComponent},
  {path:"reactive", component:ReactiveExampleComponent},
  {path:"builder", component:FormBuilderexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

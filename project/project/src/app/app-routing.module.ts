import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllproComponent } from './allpro/allpro.component';
import { Err404Component } from './err404/err404.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleComponent } from './single/single.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"index",redirectTo:"", pathMatch:'full'},
  {path:"home",redirectTo:"", pathMatch:'full'},
  {path:"products", component:AllproComponent},
  {path:"products/:id", component:SingleComponent},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllDataComponent } from './all-data/all-data.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"alldata", component:AllDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

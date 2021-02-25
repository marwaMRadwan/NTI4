import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyguardGuard } from './myguard.guard';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:'test', component: ParentComponent, canActivate:[MyguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

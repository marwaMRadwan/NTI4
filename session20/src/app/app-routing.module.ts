import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangeimgComponent } from './changeimg/changeimg.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'chngimg', component:ChangeimgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

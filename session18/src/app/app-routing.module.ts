import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { JsonComponent } from './pages/json/json.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"json", component:JsonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

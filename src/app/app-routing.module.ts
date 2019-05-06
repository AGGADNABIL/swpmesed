import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {
    path: 'preparation',
    loadChildren: './modules/preparation/preparation.module#PreparationModule'
  },
  {path: 'login',component: AuthComponent},
  {path: '',redirectTo : '/login' ,pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

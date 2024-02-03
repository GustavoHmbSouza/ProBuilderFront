import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'listActivity',
    loadChildren: () => import('./pages/activity/list-activity/list-activity.module').then(m => m.ListActivityModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importe RouterModule.forRoot() aqui
  exports: [RouterModule]
})
export class AppRoutingModule { }

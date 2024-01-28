import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'createActivity', component: CreateActivityComponent },
  //{ path: 'listActivity', component: ListActivityComponent },
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

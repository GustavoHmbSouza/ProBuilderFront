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
  {
    path: 'dashConstruct',
    loadChildren: () => import('./pages/construction/dash-construct/dash-construction.module').then(m => m.DashConstructionModule),
  },
  {
    path: 'listConstruct',
    loadChildren: () => import('./pages/construction/list-construction/list-construction.module').then(m => m.ListConstructionModule),
  },
  {
    path: 'addConstruct',
    loadChildren: () => import('./pages/construction/add-construct/add-construct.module').then(m => m.AddConstructionModule),
  },
  {
    path: 'templateCrud',
    loadChildren: () => import('./pages/activity/create-activity/create-activity.module').then(m => m.CreateActivityModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importe RouterModule.forRoot() aqui
  exports: [RouterModule]
})
export class AppRoutingModule { }

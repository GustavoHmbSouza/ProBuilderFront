import { ApplicationConfig, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateActivityComponent } from './pages/activity/create-activity/create-activity.component';
import { ListActivityComponent } from './pages/activity/list-activity/list-activity.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //{ path: 'createActivity', component: CreateActivityComponent },
  //{ path: 'listActivity', component: ListActivityComponent },
  {
    path: 'listActivity',
    loadChildren: () => import('./pages/activity/list-activity/list-activity.module').then(m => m.ListActivityModule),
  },
  // Você pode adicionar mais rotas aqui conforme necessário
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};

import { NgModule } from '@angular/core';

import { CreateActivityComponent } from './create-activity.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CreateActivityComponent }
  // Defina outras rotas internas se necessário
];

@NgModule({
  declarations: [CreateActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})

export class CreateActivityModule { }

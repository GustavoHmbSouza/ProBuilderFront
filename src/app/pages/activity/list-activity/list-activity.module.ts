import { NgModule } from '@angular/core';

import { ListActivityComponent } from './list-activity.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: ListActivityComponent }
  // Defina outras rotas internas se necessário
];

@NgModule({
  declarations: [ListActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ListActivityModule { }

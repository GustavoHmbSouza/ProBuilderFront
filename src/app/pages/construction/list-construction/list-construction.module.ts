import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListConstructionComponent } from './list-construction.component';


const routes: Routes = [
  { path: '', component: ListConstructionComponent }
  // Defina outras rotas internas se necessário
];

@NgModule({
  declarations: [ListConstructionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ListActivityModule { }

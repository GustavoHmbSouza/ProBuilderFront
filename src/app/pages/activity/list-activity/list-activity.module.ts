import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

import { ListActivityComponent } from './list-activity.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ConstructService } from '../../../service/construct/construct.service';


const routes: Routes = [
  { path: '', component: ListActivityComponent }
  // Defina outras rotas internas se necessário
];

@NgModule({
  declarations: [ListActivityComponent],
  imports: [
    CommonModule,
    HttpClientModule, // Importe o HttpClientModule aqui
    RouterModule.forChild(routes)
  ],
  providers: [ConstructService] // Certifique-se de que o ConstructService está incluído aqui
})
export class ListActivityModule { }

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListConstructionComponent } from './list-construction.component';
import { ConstructService } from '../../../service/construct/construct.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';


const routes: Routes = [
  { path: '', component: ListConstructionComponent }
  // Defina outras rotas internas se necessário
];

@NgModule({
  declarations: [ListConstructionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastModule,
    CardModule
  ],
  providers: [ConstructService, MessageService]

})
export class ListConstructionModule { }

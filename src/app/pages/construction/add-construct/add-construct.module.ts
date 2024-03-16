import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import { NodeConstructService } from '../../../service/nodeConstruct/nodeConstruct.service';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { AddConstructComponent } from './add-construct.component';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

const routes: Routes = [
  { path: '', component: AddConstructComponent }
];

@NgModule({
  declarations: [AddConstructComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ToastModule,
    CardModule,
    ButtonModule,
    InputNumberModule
  ],
  providers: [NodeConstructService, MessageService]
})
export class AddConstructionModule { }

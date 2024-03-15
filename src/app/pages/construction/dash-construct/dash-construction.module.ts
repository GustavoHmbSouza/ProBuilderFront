import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashConstructComponent } from './dash-construct.component';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import { ConstructService } from '../../../service/nodeConstruct/nodeConstruct.service';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';

const routes: Routes = [
  { path: '', component: DashConstructComponent }
];

@NgModule({
  declarations: [DashConstructComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TreeModule,
    ToastModule,
    CardModule
  ],
  providers: [ConstructService, MessageService]
})
export class DashConstructionModule { }

import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DashConstructComponent } from './dash-construct.component';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { RouterModule, Routes } from '@angular/router';
import { ConstructService } from '../../../service/construct/construct.service';
import { MessageService } from 'primeng/api';

const routes: Routes = [
  { path: '', component: DashConstructComponent }
];

@NgModule({
  declarations: [DashConstructComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TreeModule,
    ToastModule
  ],
  providers: [ConstructService, MessageService]
})
export class DashConstructionModule { }

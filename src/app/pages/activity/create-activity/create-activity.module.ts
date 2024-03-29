import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CreateActivityComponent } from './create-activity.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';

const routes: Routes = [
  { path: '', component: CreateActivityComponent }
  // Defina outras rotas internas se necessário
];

@NgModule({
  declarations: [CreateActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    TableModule,
    FileUploadModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    CardModule,
    ToggleButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule
  ],

  providers: [MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class CreateActivityModule { }

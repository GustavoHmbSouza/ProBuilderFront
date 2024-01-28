import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Certifique-se de incluir o AppComponent nas declarações
  imports: [BrowserModule, RouterModule, HttpClientModule, AppRoutingModule],
  bootstrap: [AppComponent], // Forneça o AppComponent para inicialização
})
export class AppModule { }

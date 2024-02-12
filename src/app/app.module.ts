import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LateralMenuModule } from './pages/lateral-menu/lateral-menu.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent], // Certifique-se de incluir o AppComponent nas declarações
  imports: [BrowserModule,
    RouterModule,
    LateralMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule
  ],
  bootstrap: [AppComponent], // Forneça o AppComponent para inicialização
})
export class AppModule {

}

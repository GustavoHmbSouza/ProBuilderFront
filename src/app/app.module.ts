import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LateralMenuComponent } from './pages/lateral-menu/lateral-menu.component';
import { HeaderComponent } from './pages/header/header.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, LateralMenuComponent, HeaderComponent], // Certifique-se de incluir o AppComponent nas declarações
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule, ButtonModule, SidebarModule],
  bootstrap: [AppComponent], // Forneça o AppComponent para inicialização
})
export class AppModule { }

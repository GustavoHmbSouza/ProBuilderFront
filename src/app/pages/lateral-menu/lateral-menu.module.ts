import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { LateralMenuComponent } from './lateral-menu.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { AvatarModule } from 'primeng/avatar';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  declarations: [LateralMenuComponent],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    RouterModule,
    TreeModule,
    AvatarModule,
    AccordionModule,
    MenuModule,
    PanelMenuModule
  ],
  exports: [LateralMenuComponent]
})
export class LateralMenuModule {

}

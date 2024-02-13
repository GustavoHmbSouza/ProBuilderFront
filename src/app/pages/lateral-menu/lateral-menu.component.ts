import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrl: './lateral-menu.component.scss',
  encapsulation: ViewEncapsulation.None

})
export class LateralMenuComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;




  sidebarVisible: boolean = false;

  displaySidebarMenu: boolean = false;

  alterDisplaySideBarMenu() {
    this.displaySidebarMenu = !this.displaySidebarMenu;
  }

  ngOnInit() {


  }
}

export interface TreeNode {
  label: string;
  data?: string; // Adicionei a propriedade data para o template "url"
  children?: TreeNode[];
}

import { Component, Input, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-lateral-menu',
  templateUrl: './lateral-menu.component.html',
  styleUrl: './lateral-menu.component.scss'
})
export class LateralMenuComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  customHeaderStyle = {
    'background-color': '#2a323d',
    'color': 'white',
    'border': 'none',
    'padding': '1rem 1rem 1rem 0.5rem'
  };

  customContentStyle = {
    'background-color': '#2a323d',
    'color': 'white',
    'border': 'none',
    'padding': '0 0.5rem 0 0.5rem'
  };


  sidebarVisible: boolean = false;

  displaySidebarMenu: boolean = false;

  alterDisplaySideBarMenu() {
    this.displaySidebarMenu = !this.displaySidebarMenu;
  }
}

export interface TreeNode {
  label: string;
  data?: string; // Adicionei a propriedade data para o template "url"
  children?: TreeNode[];
}

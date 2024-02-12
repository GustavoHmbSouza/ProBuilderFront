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
    'color': '#333', // Cor do texto personalizada para o cabeçalho
    'border': 'none', // Borda personalizada para o conteúdo
    'padding': '1rem 1rem 1rem 0.5rem'

  };

  customContentStyle = {
    'background-color': 'white', // Cor de fundo personalizada para o conteúdo
    'border': 'none', // Borda personalizada para o conteúdo
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

import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { LateralMenuComponent } from './pages/lateral-menu/lateral-menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild(LateralMenuComponent) lateralMenuComponent!: LateralMenuComponent;
  title = 'meu-projeto-angular';
  mostrarMenuLateral: boolean = true;

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.mostrarMenuLateral = !event.url.includes('/login');
      }
    });
  }


  menuChange() {
    this.lateralMenuComponent.alterDisplaySideBarMenu();
  }
}

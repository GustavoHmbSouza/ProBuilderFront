import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() menuChange = new EventEmitter<any>();

  menuClick() {
    this.menuChange.emit();
  }
}

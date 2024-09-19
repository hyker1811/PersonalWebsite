import { Component, inject, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeStore } from '../store/theme/theme.store';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  readonly themeStore = inject(ThemeStore);

  switchTheme() {
    this.themeStore.switchBetweenDarkAndLight();
    console.log(this.themeStore.theme());
  }
}

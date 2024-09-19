import { Component, inject } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { watchState } from '@ngrx/signals';
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

  constructor() {
    watchState(this.themeStore, (store) => {
      console.log('watchState', store.theme);
      document.body.classList.toggle('dark-theme');
    });
  }

  switchTheme() {
    this.themeStore.switchBetweenDarkAndLight();
  }
}

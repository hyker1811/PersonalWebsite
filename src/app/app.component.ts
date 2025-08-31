import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { watchState } from '@ngrx/signals';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { Theme, ThemeStore } from './store/theme/theme.store';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, BodyComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly themeStore = inject(ThemeStore);

  constructor(private renderer: Renderer2) {
    watchState(this.themeStore, (state) => {
      switch (state.theme) {
        case Theme.DARK:
          this.renderer.removeClass(document.body, 'light-theme');
          this.renderer.addClass(document.body, 'dark-theme');
          break;
        case Theme.LIGHT:
          this.renderer.removeClass(document.body, 'dark-theme');
          this.renderer.addClass(document.body, 'light-theme');
          break;
      }
    });
  }
}

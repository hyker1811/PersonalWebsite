import {
  Component,
  inject,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Theme, ThemeStore } from './store/theme/theme.store';
import { watchState } from '@ngrx/signals';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
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

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeStore } from '../store/theme/theme.store';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: 'header.component.css',
})
export class HeaderComponent {
  readonly themeStore = inject(ThemeStore);
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ThemeStore } from '../store/theme/theme.store';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  readonly themeStore = inject(ThemeStore);
}

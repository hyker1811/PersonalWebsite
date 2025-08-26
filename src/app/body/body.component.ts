import { CommonModule } from '@angular/common';
import { Component, inject, Renderer2 } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { Theme, ThemeStore } from '../store/theme/theme.store';
import { watchState } from '@ngrx/signals';

@Component({
  selector: 'app-body',
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  readonly themeStore = inject(ThemeStore);
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeStore } from '../store/theme/theme.store';

@Component({
    selector: 'app-header',
    imports: [NgbNavModule, CommonModule],
    templateUrl: './header.component.html'
})
export class HeaderComponent {
  readonly themeStore = inject(ThemeStore);
}

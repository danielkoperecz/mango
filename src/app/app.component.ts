import {Component} from '@angular/core';
import {GridComponent} from './components/grid/grid.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {ThemeService} from './theme/services/theme.service';
import {SectionComponent} from './components/section/section.component';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {FlexComponent} from './components/flex/flex.component';

@Component({
  selector: 'app-root',
  imports: [GridComponent, CanvasComponent, SectionComponent, ButtonComponent, CardComponent, NgOptimizedImage, FlexComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'framework';

  constructor(private themeService: ThemeService) {
  }

  switchToLight() {
    this.themeService.switchToLightTheme();
  }

  switchToDark() {
    this.themeService.switchToDarkTheme();
  }
}

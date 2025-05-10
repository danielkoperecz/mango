import { Component } from '@angular/core';
import {GridComponent} from './components/grid/grid.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {FlexComponent} from './components/flex/flex.component';
import {ThemeService} from './theme/services/theme.service';
import {SectionComponent} from './components/section/section.component';
import {HeaderComponent} from './components/header/header.component';
import {HoverGrowDirective} from './directives/animations/hover-grow.directive';
import {BounceClickDirective} from './directives/animations/bounce-click.directive';
import {SkeletonLoaderDirective} from './directives/animations/skeleton-loader.directive';
import {ButtonComponent} from './components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [GridComponent, CanvasComponent, FlexComponent, SectionComponent, HeaderComponent, BounceClickDirective, SkeletonLoaderDirective, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'framework';

  constructor(private themeService: ThemeService) {}

  switchToLight() {
    this.themeService.switchToLightTheme();
  }

  switchToDark() {
    this.themeService.switchToDarkTheme();
  }
}

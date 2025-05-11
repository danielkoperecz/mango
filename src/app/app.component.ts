import {Component} from '@angular/core';
import {GridComponent} from './components/grid/grid.component';
import {CanvasComponent} from './components/canvas/canvas.component';
import {ThemeService} from './theme/services/theme.service';
import {SectionComponent} from './components/section/section.component';
import {HeaderComponent} from './components/header/header.component';
import {SkeletonLoaderDirective} from './directives/animations/skeleton-loader.directive';
import {ButtonComponent} from './components/button/button.component';
import {CardComponent} from './components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [GridComponent, CanvasComponent, SectionComponent, HeaderComponent, SkeletonLoaderDirective, ButtonComponent, CardComponent],
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

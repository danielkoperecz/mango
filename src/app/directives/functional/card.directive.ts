// card.directive.ts
import { Directive } from '@angular/core';
import { BaseDirective } from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appCard]',
  standalone: true,
})
export class CardDirective extends BaseDirective {

  applyStyles(theme: Theme): void {
    this.styles
      .makeItFullWidth()
      .makeItOutlined()
      .makeItPadded()
      .makeItRounded()
      .makeItShadowed();
  }
}

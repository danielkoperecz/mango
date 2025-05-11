// card.directive.ts
import {Directive, Input} from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[appCard]',
  standalone: true,
})
export class CardDirective extends BaseDirective {
  @Input() rounded?: boolean; // Rounded button

  applyStyles(): void {
    this.styles
      .makeItOutlined()
      .makeItShadowed();

    if (this.rounded) {
      this.styles.makeItRounded()
    }
  }
}

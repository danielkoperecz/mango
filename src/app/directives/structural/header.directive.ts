// header.directive.ts
import { Directive, Input} from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective extends BaseDirective {
  @Input() sticky: boolean = false;

  applyStyles(theme: Theme): void {
    const element = this.element;

    this.styleSetter.setStyle(element, 'padding', theme.spacing.md);
    this.styleSetter.setStyle(element, 'background', 'red');
    this.styleSetter.setStyle(element, 'color', theme.colors.text);
    this.styleSetter.setStyle(element, 'boxSizing', 'border-box');
    this.styleSetter.setStyle(element, 'width', '100%');
    this.styleSetter.setStyle(element, 'zIndex', '1000');

    if (this.sticky) {
      this.styleSetter.setStyle(element, 'position', 'sticky');
      this.styleSetter.setStyle(element, 'top', '0');
    } else {
      this.styleSetter.removeStyle(element, 'position');
      this.styleSetter.removeStyle(element, 'top');
    }
  }
}

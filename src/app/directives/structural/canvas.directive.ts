import {Directive} from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appCanvas]'
})
export class CanvasDirective extends BaseDirective {

  applyStyles(theme: Theme) {
    console.log(theme)
    this.styles
      .makeItFlex('column', false)
      .makeItFullWidth()
      .makeItOverflowXHidden()
      .makeItPadded()

    this.styleSetter.setStyle(this.element, 'background', theme.colors.background);
    this.styleSetter.setStyle(this.element, 'color', theme.colors.text);
    this.styleSetter.setStyle(this.element, 'gap', theme.spacing.lg);
    this.styleSetter.setStyle(this.element, 'alignItems', 'center');
  }

}

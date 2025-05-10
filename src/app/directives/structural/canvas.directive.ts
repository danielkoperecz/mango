import {Directive} from '@angular/core';
import {BaseDirective} from '../base.directive';

@Directive({
  selector: '[appCanvas]'
})
export class CanvasDirective extends BaseDirective {

  applyStyles(tokens: any, theme: any) {
    this.styles
      .makeItFlex('column', false)
      .makeItFullWidth()
      .makeItOverflowXHidden()
      .makeItPadded()

    this.renderer.setStyle(this.element, 'background', theme.background);
    this.renderer.setStyle(this.element, 'color', theme.text);
    this.renderer.setStyle(this.element, 'gap', tokens.spacing.lg);
    this.renderer.setStyle(this.element, 'alignItems', 'center');
  }

}

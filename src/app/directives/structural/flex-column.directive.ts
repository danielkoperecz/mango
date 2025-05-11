import {Directive, Input} from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appFlexColumn]'
})
export class FlexColumnDirective extends BaseDirective {

  @Input() wrap: 'wrap' | 'no-wrap' = 'no-wrap';
  @Input() justify: 'space-between' | 'start' | 'end' | 'space-evenly' = 'space-between';
  @Input() align: 'center' | 'start' | 'end'  = 'start';

  applyStyles(theme?: Theme) {
    this.styles
      .makeItFlex('column', this.wrap)

    this.styleSetter.setStyle(this.element, 'justifyContent', this.justify);
    this.styleSetter.setStyle(this.element, 'alignItems', this.align);
  }

}

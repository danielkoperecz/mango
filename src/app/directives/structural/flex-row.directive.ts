import {Directive, Input} from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appFlexRow]'
})
export class FlexRowDirective extends BaseDirective {

  @Input() wrap: 'wrap' | 'no-wrap' = 'wrap';
  @Input() justify: 'space-between' | 'start' | 'end' | 'space-evenly' = 'space-between';
  @Input() align: 'center' | 'start' | 'end'  = 'start';

  applyStyles(theme?: Theme) {
    this.styleSetter.setStyle(this.element, 'display', 'flex');
    this.styleSetter.setStyle(this.element, 'flexDirection', 'row');
    this.styleSetter.setStyle(this.element, 'flexWrap', this.wrap);
    this.styleSetter.setStyle(this.element, 'justifyContent', this.justify);
    this.styleSetter.setStyle(this.element, 'alignItems', this.align);
  }

}

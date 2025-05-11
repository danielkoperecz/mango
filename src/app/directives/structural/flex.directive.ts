import {Directive, Input, OnChanges, SimpleChanges} from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appFlex]'
})
export class FlexDirective extends BaseDirective {

  @Input() direction: 'row' | 'column' = 'row';
  @Input() wrap: 'wrap' | 'no-wrap' = 'no-wrap';
  @Input() justify: 'space-between' | 'start' | 'end' | 'space-evenly' = 'space-between';
  @Input() align: 'center' | 'start' | 'end'  = 'center';

  applyStyles(theme?: Theme) {

    console.log(this.direction)

    this.styleSetter.setStyle(this.element, 'display', 'flex');
    this.styleSetter.setStyle(this.element, 'flexDirection', this.direction);
    this.styleSetter.setStyle(this.element, 'flexWrap', this.wrap);
    this.styleSetter.setStyle(this.element, 'justifyContent', this.justify);
    this.styleSetter.setStyle(this.element, 'alignItems', this.align);
    this.styleSetter.setStyle(this.element, 'width', '100%');
    this.styleSetter.setStyle(this.element, 'height', '100%');
  }

}

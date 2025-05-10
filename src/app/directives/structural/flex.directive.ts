import {Directive, Input} from '@angular/core';
import {BaseDirective} from '../base.directive';

@Directive({
  selector: '[appFlex]'
})
export class FlexDirective extends BaseDirective {

  @Input() direction: 'row' | 'column' = 'row';
  @Input() wrap: ' wrap' | '' = '';
  @Input() align: string = 'space-between center';

  applyStyles(tokens: any, theme: any) {
    const [justifyContent, alignItems] = this.align.split(' ');

    this.renderer.setStyle(this.element, 'display', 'flex');
    this.renderer.setStyle(this.element, 'flexFlow', this.direction + this.wrap);
    this.renderer.setStyle(this.element, 'justifyContent', justifyContent);
    this.renderer.setStyle(this.element, 'alignItems', alignItems);
    this.renderer.setStyle(this.element, 'width', '100%');
    this.renderer.setStyle(this.element, 'height', '100%');
  }
}

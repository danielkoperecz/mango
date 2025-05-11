import {Directive, Input, OnChanges} from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective extends BaseDirective implements OnChanges {
  @Input() columns: string[] = [];

  applyStyles(theme: Theme): void {
    this.styles
      .makeItFullHeight()
      .makeItFullWidth()
      .makeItGrid();
  }

  //TODO: ez enm így kell
  ngOnChanges() {

    this.styleSetter.setStyle(this.element, 'gridTemplateColumns', this.columns.join(' '));

    // Apply outline to each direct child
    Array.from(this.element.children).forEach((child: any) => {
      this.styleSetter.setStyle(child, 'outline', '1px solid red');
    });
  }
}

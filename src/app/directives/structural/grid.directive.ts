import {Directive, Input, OnChanges} from '@angular/core';
import {BaseDirective} from '../base.directive';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective extends BaseDirective implements OnChanges {
  @Input() columns: string[] = [];

  applyStyles(tokens: any, theme: any): void {
    this.styles
      .makeItFullHeight()
      .makeItFullWidth()
      .makeItGrid();
  }

  ngOnChanges() {

    this.renderer.setStyle(this.element, 'gridTemplateColumns', this.columns.join(' '));

    // Apply outline to each direct child
    Array.from(this.element.children).forEach((child: any) => {
      this.renderer.setStyle(child, 'outline', '1px solid red');
    });
  }
}

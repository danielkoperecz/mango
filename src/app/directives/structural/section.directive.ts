// section.directive.ts
import { Directive } from '@angular/core';
import {BaseDirective} from '../base.directive';
import {Theme} from '../../theme/interfaces/theme.interface';

@Directive({
  selector: '[appSection]',
})
export class SectionDirective extends BaseDirective {

  applyStyles(theme: Theme): void {
    const element = this.element;

    this.styleSetter.setStyle(element, 'height', '100vh');
    this.styleSetter.setStyle(element, 'overflow', 'hidden');
    this.styleSetter.setStyle(element, 'padding', theme.spacing.md);
    this.styleSetter.setStyle(element, 'background', 'pink');
    this.styleSetter.setStyle(element, 'color', theme.colors.text);
    this.styleSetter.setStyle(element, 'boxSizing', 'border-box');
    this.styleSetter.setStyle(element, 'width', '100%');
    this.styleSetter.setStyle(element, 'display', 'flex');
    this.styleSetter.setStyle(element, 'flexDirection', 'column');
  }
}

// section.directive.ts
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { ThemeService } from '../../theme/services/theme.service';
import {BaseDirective} from '../base.directive';
import {StyleService} from '../../theme/services/style.service';

@Directive({
  selector: '[appSection]',
})
export class SectionDirective extends BaseDirective {

  override applyStyles(tokens: any, theme: any): void {
    const element = this.element;

    this.renderer.setStyle(element, 'height', '100vh');
    this.renderer.setStyle(element, 'overflow', 'hidden');
    this.renderer.setStyle(element, 'padding', tokens.spacing.md);
    this.renderer.setStyle(element, 'background', 'pink');
    this.renderer.setStyle(element, 'color', theme.text);
    this.renderer.setStyle(element, 'boxSizing', 'border-box');
    this.renderer.setStyle(element, 'width', '100%');
    this.renderer.setStyle(element, 'display', 'flex');
    this.renderer.setStyle(element, 'flexDirection', 'column');
  }
}

// header.directive.ts
import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { ThemeService } from '../../theme/services/theme.service';
import {BaseDirective} from '../base.directive';
import {StyleService} from '../../theme/services/style.service';

@Directive({
  selector: '[appHeader]',
})
export class HeaderDirective extends BaseDirective implements OnChanges {
  @Input() sticky: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sticky']) {
      this.applyStyles(this.themeService.getTokens(), this.themeService.getTheme());
    }
  }

  applyStyles(tokens: any, theme: any): void {
    const element = this.element;

    this.renderer.setStyle(element, 'padding', tokens.spacing.md);
    this.renderer.setStyle(element, 'background', 'red');
    this.renderer.setStyle(element, 'color', theme.text);
    this.renderer.setStyle(element, 'boxSizing', 'border-box');
    this.renderer.setStyle(element, 'width', '100%');
    this.renderer.setStyle(element, 'zIndex', '1000');

    if (this.sticky) {
      this.renderer.setStyle(element, 'position', 'sticky');
      this.renderer.setStyle(element, 'top', '0');
    } else {
      this.renderer.removeStyle(element, 'position');
      this.renderer.removeStyle(element, 'top');
    }
  }
}

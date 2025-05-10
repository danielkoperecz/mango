import {Renderer2} from '@angular/core';
import {ThemeService} from '../services/theme.service';

export class StyleBuilder {
  constructor(
    private renderer: Renderer2,
    private el: HTMLElement,
    private themeService: ThemeService,
  ) {
    this.default()
  }

  default() {
    this.renderer.setStyle(this.el, 'box-sizing', 'border-box');
  }

  makeItFullHeight(): this {
    this.renderer.setStyle(this.el, 'height', '100%');
    return this;
  }

  makeItFullWidth(): this {
    this.renderer.setStyle(this.el, 'width', '100%');
    return this;
  }

  makeItGrid(): this {
    this.renderer.setStyle(this.el, 'display', 'grid');
    this.renderer.setStyle(this.el, 'gridGap', this.themeService.getTokens().spacing.sm);
    return this;
  }

  makeItFlex(direction: 'row' | 'column' = "row", wrap: boolean = false): this {
    this.renderer.setStyle(this.el, 'display', 'flex');
    this.renderer.setStyle(this.el, 'flexFlow', wrap ? direction + " " + wrap: direction);
    return this;
  }

  // Add other helpers...
  makeItOverflowXHidden() {
    this.renderer.setStyle(this.el, 'overflowX', 'hidden');
    return this;
  }

  makeItPadded() {
    this.renderer.setStyle(this.el, 'padding', this.themeService.getTokens().spacing.md);
    return this;
  }
}

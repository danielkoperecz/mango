import {ThemeService} from '../services/theme.service';
import {SafeStyleSetter} from './safe-style-setter';

export class StyleBuilder {
  constructor(
    private el: HTMLElement,
    private themeService: ThemeService,
    private styleSetter: SafeStyleSetter
  ) {
    this.default()
  }

  default() {
    this.styleSetter.setStyle(this.el, 'boxSizing', 'border-box');
  }

  makeItFullHeight(): this {
    this.styleSetter.setStyle(this.el, 'height', '100%');
    return this;
  }

  makeItFullWidth(): this {
    this.styleSetter.setStyle(this.el, 'width', '100%');
    return this;
  }

  makeItGrid(): this {
    this.styleSetter.setStyle(this.el, 'display', 'grid');
    this.styleSetter.setStyle(this.el, 'gridGap', this.themeService.getTokens().spacing.sm);
    return this;
  }

  makeItFlex(direction: 'row' | 'column' = "row", wrap: boolean = false): this {
    this.styleSetter.setStyle(this.el, 'display', 'flex');
    this.styleSetter.setStyle(this.el, 'flexFlow', wrap ? direction + " " + wrap: direction);
    return this;
  }

  // Add other helpers...
  makeItOverflowXHidden() {
    this.styleSetter.setStyle(this.el, 'overflowX', 'hidden');
    return this;
  }

  makeItPadded() {
    this.styleSetter.setStyle(this.el, 'padding', this.themeService.getTokens().spacing.md);
    return this;
  }

  makeItRounded() {
    this.styleSetter.setStyle(this.el, 'borderRadius', this.themeService.getTheme().borderRadius.md);
    return this;
  }

  makeItShadowed() {
    this.styleSetter.setStyle(this.el, 'boxShadow', '8px');
    return this;
  }

  makeItOutlined() {
    this.styleSetter.setStyle(this.el, 'outline', '1px solid grey');
    return this;
  }
}

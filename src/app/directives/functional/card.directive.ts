// card.directive.ts
import {Directive, Input} from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[appCard]',
  standalone: true,
})
export class CardDirective extends BaseDirective {
  @Input() rounded?: boolean; // Rounded button

  applyStyles(): void {
    this.styles
      .makeItFullWidth()
      .makeItOverflowHidden()
      .makeItOutlined()
      .makeItShadowed();

    if (this.rounded) {
      this.styles.makeItRounded()
    }

    // Find the card-actions slot and apply padding
    const actions = this.element.querySelector('[card-actions]');
    const content = this.element.querySelector('[card-content]');
    const title = this.element.querySelector('[card-title]');

    if (actions instanceof HTMLElement) {
      this.styleSetter.setStyle(actions, 'padding', this.themeService.getTheme().spacing.md);
      this.styleSetter.setStyle(actions, 'display', 'flex');
      this.styleSetter.setStyle(actions, 'gap', this.themeService.getTheme().spacing.md);
    }
    if (content instanceof HTMLElement) {
      this.styleSetter.setStyle(content, 'padding', this.themeService.getTheme().spacing.md);
    }
    if (title instanceof HTMLElement) {
      this.styleSetter.setStyle(title, 'padding', this.themeService.getTheme().spacing.md);
    }
  }
}

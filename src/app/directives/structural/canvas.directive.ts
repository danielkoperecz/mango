import {Directive, ElementRef, Renderer2} from '@angular/core';
import {ThemeService} from '../../theme/services/theme.service';
import {BaseDirective} from '../base.directive';

@Directive({
  selector: '[appCanvas]'
})
export class CanvasDirective extends BaseDirective {

  constructor(
    el: ElementRef,
    renderer: Renderer2,
    themeService: ThemeService)
  {
    super(el, renderer, themeService);
  }

  protected override applyStyles() {
    const tokens = this.themeService.getTokens();
    const theme = this.themeService.getTheme();

    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flexDirection', 'column');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100vw');
    this.renderer.setStyle(this.el.nativeElement, 'overflowX', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'padding', tokens.spacing.md);
    this.renderer.setStyle(this.el.nativeElement, 'background', theme.background);
    this.renderer.setStyle(this.el.nativeElement, 'color', theme.text);
    this.renderer.setStyle(this.el.nativeElement, 'gap', tokens.spacing.lg);
    this.renderer.setStyle(this.el.nativeElement, 'alignItems', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'boxSizing', 'border-box');
    this.renderer.setStyle(this.el.nativeElement, 'maxWidth', '100%');
  }
}

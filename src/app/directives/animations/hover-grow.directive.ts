import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverGrow]',
  standalone: true,
})
export class HoverGrowDirective {
  private readonly scaleAmount = 1.05;
  private readonly transition = 'transform 0.3s ease-in-out';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', this.transition);
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-block'); // Ensures transform works
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(${this.scaleAmount})`);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}

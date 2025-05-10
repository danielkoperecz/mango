import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBounceClick]',
  standalone: true,
})
export class BounceClickDirective {
  private readonly transition = 'transform 0.15s ease';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transition', this.transition);
    this.renderer.setStyle(this.el.nativeElement, 'willChange', 'transform');
  }

  @HostListener('mousedown')
  onMouseDown(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.96)');
  }

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }

  // Touch support
  @HostListener('touchstart')
  onTouchStart(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(0.96)');
  }

  @HostListener('touchend')
  @HostListener('touchcancel')
  onTouchEnd(): void {
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'scale(1)');
  }
}

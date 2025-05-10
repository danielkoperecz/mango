import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSkeletonLoader]',
  standalone: true,
})
export class SkeletonLoaderDirective implements OnInit {
  @Input() width: string = '100%';
  @Input() height: string = '1em';
  @Input() borderRadius: string = '4px';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const element = this.el.nativeElement;

    this.renderer.setStyle(element, 'display', 'inline-block');
    this.renderer.setStyle(element, 'width', this.width);
    this.renderer.setStyle(element, 'height', this.height);
    this.renderer.setStyle(element, 'background', 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)');
    this.renderer.setStyle(element, 'backgroundSize', '200% 100%');
    this.renderer.setStyle(element, 'borderRadius', this.borderRadius);
    this.renderer.setStyle(element, 'animation', 'skeleton-loading 1.5s infinite ease-in-out');

    // Add keyframes globally if not present
    this.appendSkeletonKeyframes();
  }

  private appendSkeletonKeyframes(): void {
    const styleId = 'skeleton-keyframes';
    if (document.getElementById(styleId)) return;

    const style = this.renderer.createElement('style');
    this.renderer.setAttribute(style, 'id', styleId);
    style.textContent = `
      @keyframes skeleton-loading {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }
    `;
    this.renderer.appendChild(document.head, style);
  }
}

import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGrid]'
})
export class GridDirective implements OnChanges {
  @Input() columns: string[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'grid');
    this.renderer.setStyle(this.el.nativeElement, 'gridGap', '8px');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');
  }

  ngOnChanges() {
    const el = this.el.nativeElement;

    this.renderer.setStyle(el, 'gridTemplateColumns', this.columns.join(' '));

    // Apply outline to each direct child
    Array.from(el.children).forEach((child: any) => {
      this.renderer.setStyle(child, 'outline', '1px solid red');
    });
  }
}

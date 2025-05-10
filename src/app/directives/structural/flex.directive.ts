import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appFlex]'
})
export class FlexDirective {

  @Input() direction: 'row' | 'column' = 'row';
  @Input() align: string = 'space-between center';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const [justifyContent, alignItems] = this.align.split(' ');

    this.renderer.setStyle(this.el.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.el.nativeElement, 'flexFlow', this.direction + ' wrap');
    this.renderer.setStyle(this.el.nativeElement, 'justifyContent', justifyContent);
    this.renderer.setStyle(this.el.nativeElement, 'alignItems', alignItems);
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.el.nativeElement, 'height', '100%');
  }
}

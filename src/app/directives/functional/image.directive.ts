import {Directive, ElementRef, Input, Renderer2, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import { BaseDirective } from '../base.directive';

@Directive({
  selector: '[appImage]',
})
export class ImageDirective extends BaseDirective implements OnChanges {
  @Input() src!: string;

  private imgElement!: HTMLImageElement;

  ngOnChanges(changes: SimpleChanges) {
    // Create the image element
    this.imgElement = this.renderer.createElement('img');

    // Set the src for the image
    this.renderer.setAttribute(this.imgElement, 'src', this.src);

    // Apply styles
    this.applyStyles();

    // Append the image to the host element (the element the directive is applied to)
    this.renderer.appendChild(this.element, this.imgElement);
  }

  applyStyles() {
    this.styleSetter.setStyle(this.imgElement, 'width', '100%'); // Fill container width
    this.styleSetter.setStyle(this.imgElement, 'height', 'auto'); // Maintain aspect ratio
    this.styleSetter.setStyle(this.imgElement, 'objectFit', 'contain'); // Prevent overflow and preserve aspect ratio
    this.styleSetter.setStyle(this.imgElement, 'imageRendering', 'cover'); // Set image rendering for better quality
    this.styleSetter.setStyle(this.imgElement, 'borderRadius', 'inherit');

  }
}

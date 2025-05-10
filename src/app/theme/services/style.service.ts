import { Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() {}

  makeItStickToTheTop(renderer: Renderer2, element: HTMLElement): void {
    renderer.setStyle(element, 'position', 'sticky');
    renderer.setStyle(element, 'top', '0');
  }

  makeItPadded(renderer: Renderer2, element: HTMLElement, padding: string): void {
    renderer.setStyle(element, 'padding', padding);
  }

  makeItFlexRow(renderer: Renderer2, element: HTMLElement, wrap: boolean = false, justify = 'space-between', align = 'center'): void {
    renderer.setStyle(element, 'display', 'flex');
    renderer.setStyle(element, 'flexFlow', `row${wrap ? ' wrap' : ''}`);
    renderer.setStyle(element, 'justifyContent', justify);
    renderer.setStyle(element, 'alignItems', align);
  }

  makeItFillViewportHeight(renderer: Renderer2, element: HTMLElement): void {
    renderer.setStyle(element, 'height', '100vh');
  }

  makeItColored(renderer: Renderer2, element: HTMLElement, background: string, text: string): void {
    renderer.setStyle(element, 'background', background);
    renderer.setStyle(element, 'color', text);
  }

  makeItBoxSized(renderer: Renderer2, element: HTMLElement): void {
    renderer.setStyle(element, 'boxSizing', 'border-box');
  }

  makeItFullWidth(renderer: Renderer2, element: HTMLElement): void {
    renderer.setStyle(element, 'width', '100%');
  }

  makeItZIndexed(renderer: Renderer2, element: HTMLElement, z: number = 1000): void {
    renderer.setStyle(element, 'zIndex', z.toString());
  }

  makeItHideOverflow(renderer: Renderer2, element: HTMLElement): void {
    renderer.setStyle(element, 'overflow', 'hidden');
  }
}

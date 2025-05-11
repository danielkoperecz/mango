import { Injectable, Renderer2 } from '@angular/core';

// Map camelCase style properties to their correct types
type StyleProps = {
  [K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends string ? K : never]: string;
};

@Injectable({
  providedIn: 'root',
})
export class SafeStyleSetter {
  constructor(private renderer: Renderer2) {}

  setStyle<K extends keyof StyleProps>(
    element: HTMLElement,
    property: K,
    value: StyleProps[K]
  ): void {
    this.renderer.setStyle(element, property as string, value);
  }

  removeStyle<K extends keyof StyleProps>(
    element: HTMLElement,
    property: K,
  ): void {
    this.renderer.removeStyle(element, property as string);
  }
}

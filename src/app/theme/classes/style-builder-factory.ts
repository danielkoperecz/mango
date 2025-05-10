import { Injectable, Renderer2 } from '@angular/core';
import { StyleBuilder } from './style-builder';
import {ThemeService} from '../services/theme.service';

@Injectable({ providedIn: 'root' })
export class StyleBuilderFactory {
  create(renderer: Renderer2, el: HTMLElement, themeService: ThemeService): StyleBuilder {
    return new StyleBuilder(renderer, el, themeService);
  }
}

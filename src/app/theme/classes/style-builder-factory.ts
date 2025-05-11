import { Injectable, Renderer2 } from '@angular/core';
import { StyleBuilder } from './style-builder';
import {ThemeService} from '../services/theme.service';
import {SafeStyleSetter} from './safe-style-setter';

@Injectable({ providedIn: 'root' })
export class StyleBuilderFactory {
  create(el: HTMLElement, themeService: ThemeService, styleSetter: SafeStyleSetter): StyleBuilder {
    return new StyleBuilder(el, themeService, styleSetter);
  }
}

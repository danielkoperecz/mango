import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DesignTokens } from '../design-tokens';
import {Theme} from '../interfaces/theme.interface'; // Assuming design tokens are stored here

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightTheme = {
    colors: {
      primary: '#6200ee',
      secondary: '#03dac6',
      background: '#ffffff',
      text: '#000000',
      border: '#cccccc',
    },
  };

  private darkTheme = {
    colors: {
      primary: '#bb86fc',
      secondary: '#03dac6',
      background: '#272728',
      text: '#ffffff',
      border: '#444444',
    },
  };

  // The DesignTokens structure is loaded directly into the theme
  private designTokens = DesignTokens;

  // The theme is a combination of the light/dark theme and design tokens
  private themeSubject = new BehaviorSubject<Theme>({
    ...this.lightTheme,
    ...this.designTokens, // Merge design tokens into the theme
  });

  theme$ = this.themeSubject.asObservable();

  getTheme() {
    return this.themeSubject.getValue();
  }

  switchToDarkTheme() {
    const darkTheme = {
      ...this.designTokens, // Merge design tokens into dark theme
      ...this.darkTheme,
    } as Theme;
    this.themeSubject.next(darkTheme);
  }

  switchToLightTheme() {
    const lightTheme = {
      ...this.designTokens, // Merge design tokens into light theme
      ...this.lightTheme,
    } as Theme;
    this.themeSubject.next(lightTheme);
  }
}

// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DesignTokens} from '../design-tokens';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private lightTheme = {
    background: '#ffffff',
    text: '#000000',
  };

  private darkTheme = {
    background: '#121212',
    text: '#ffffff',
  };

  private tokens = DesignTokens

  private themeSubject = new BehaviorSubject(this.lightTheme);
  theme$ = this.themeSubject.asObservable();

  getTokens() {
    return this.tokens;
  }

  getTheme() {
    return this.themeSubject.getValue();
  }

  switchToDarkTheme() {
    this.themeSubject.next(this.darkTheme);
  }

  switchToLightTheme() {
    this.themeSubject.next(this.lightTheme);
  }
}

// theme-aware.directive.ts
import { Directive, ElementRef, Renderer2, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {ThemeService} from '../theme/services/theme.service';

@Directive()
// abstract because it's not used directly
export abstract class BaseDirective implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  protected constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
    protected themeService: ThemeService
  ) {}

  ngOnInit(): void {
    const tokens = this.themeService.getTokens();
    this.subscription = this.themeService.theme$.subscribe((theme) => {
      this.applyStyles(tokens, theme);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // To be overridden by derived directives
  protected abstract applyStyles(tokens: any, theme: any): void;
}

import { Directive, ElementRef, Injector, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../theme/services/theme.service';
import { StyleBuilder } from '../theme/classes/style-builder';
import { StyleBuilderFactory } from '../theme/classes/style-builder-factory';
import {CanBeStyled} from '../theme/interfaces/can-be-styled';

@Directive()
export abstract class BaseDirective implements OnInit, OnDestroy, CanBeStyled {
  private subscription?: Subscription;
  protected styles!: StyleBuilder;

  protected readonly themeService: ThemeService;
  protected readonly renderer: Renderer2;
  protected readonly element: HTMLElement;

  constructor(injector: Injector, elRef: ElementRef, renderer: Renderer2) {
    this.renderer = renderer;
    this.element = elRef.nativeElement;
    this.themeService = injector.get(ThemeService);

    const factory = injector.get(StyleBuilderFactory);
    this.styles = factory.create(this.renderer, this.element, this.themeService);
  }

  ngOnInit(): void {
    const tokens = this.themeService.getTokens();
    this.subscription = this.themeService.theme$.subscribe((theme) => {
      this.applyStyles(tokens, theme);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  abstract applyStyles(tokens: any, theme: any): void;
}

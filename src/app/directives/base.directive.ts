import {Directive, ElementRef, Injector, OnDestroy, OnInit, Renderer2, RendererFactory2} from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../theme/services/theme.service';
import { StyleBuilder } from '../theme/classes/style-builder';
import { StyleBuilderFactory } from '../theme/classes/style-builder-factory';
import {CanBeStyled} from '../theme/interfaces/can-be-styled';
import {Theme} from '../theme/interfaces/theme.interface';
import {SafeStyleSetter} from '../theme/classes/safe-style-setter';

@Directive()
export abstract class BaseDirective implements OnInit, OnDestroy, CanBeStyled {
  private subscription?: Subscription;
  protected styles!: StyleBuilder;

  protected readonly themeService: ThemeService;
  protected readonly element: HTMLElement;
  protected readonly styleSetter: SafeStyleSetter;
  protected readonly renderer: Renderer2;

  constructor(injector: Injector, elRef: ElementRef) {
    this.element = elRef.nativeElement;
    this.themeService = injector.get(ThemeService);

    const rendererFactory = injector.get(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null); // ✅ Renderer2 instance
    this.styleSetter = new SafeStyleSetter(this.renderer); // now you can pass it

    const factory = injector.get(StyleBuilderFactory);
    this.styles = factory.create(this.element, this.themeService, this.styleSetter);
  }

  ngOnInit(): void {
    this.subscription = this.themeService.theme$.subscribe((theme: Theme) => {
      this.applyStyles(theme);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  abstract applyStyles(theme: Theme): void;
}

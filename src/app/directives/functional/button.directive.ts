import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../../theme/services/theme.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appButton]'  // Apply this directive to any element
})
export class ButtonDirective implements OnInit, OnDestroy {
  @Input() rounded: boolean = false; // Rounded button
  @Input() success: boolean = false; // Success button (uses theme)
  @Input() error: boolean = false;   // Error button (uses theme)
  @Input() text!: string; // Make button fill full width

  private subscription: Subscription | undefined;
  private fontSize: string = '14px'; // Default font size (fallback)
  private fontFamily: string = 'Arial'; // Default font size (fallback)

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.subscription = this.themeService.theme$.subscribe((theme) => {
      this.fontSize = theme.typography.fontSize || this.fontSize;  // Get font size from theme
      this.fontSize = theme.typography.fontFamily || this.fontFamily;  // Get font size from theme
      this.applyStyles(theme);
    });

    // Apply styles when theme is first available
    const initialTheme = this.themeService.getTheme();
    this.fontSize = initialTheme.typography.fontSize || this.fontSize;
    this.applyStyles(initialTheme);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private applyStyles(theme: any): void {
    // Reset styles
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline-flex');
    this.renderer.setStyle(this.el.nativeElement, 'justify-content', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'outline', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'all 0.3s ease');
    this.renderer.setStyle(this.el.nativeElement, 'width', '100%');

    // Apply size based on font size (calculated dynamically)
    this.renderer.setStyle(this.el.nativeElement, 'font-size', this.fontSize);
    this.renderer.setStyle(this.el.nativeElement, 'font-family', this.fontFamily);

    // Apply padding based on theme
    const padding = theme.spacing?.md || '0.75rem 1.5rem';  // Use theme spacing
    this.renderer.setStyle(this.el.nativeElement, 'padding', padding);

    // Apply the shape (rounded or not)
    if (this.rounded) {
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', '8px');
    }

    // Apply theme-based colors (background and text)
    if (this.success) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', theme.successBackground || '#4caf50');
      this.renderer.setStyle(this.el.nativeElement, 'color', theme.successText || 'white');
    } else if (this.error) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', theme.errorBackground || '#f44336');
      this.renderer.setStyle(this.el.nativeElement, 'color', theme.errorText || 'white');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', theme.primaryBackground || '#007bff');
      this.renderer.setStyle(this.el.nativeElement, 'color', theme.primaryText || 'white');
    }
  }
}

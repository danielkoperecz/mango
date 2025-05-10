import {Component, Input} from '@angular/core';
import {ButtonDirective} from '../../directives/functional/button.directive';
import {BounceClickDirective} from '../../directives/animations/bounce-click.directive';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  hostDirectives: [
    {
      directive: ButtonDirective,
      inputs: ['rounded', 'error', 'success', 'text']
    },
    BounceClickDirective
  ]
})
export class ButtonComponent {

  @Input() rounded: boolean = false;  // For rounded or rectangular shapes
  @Input() success: boolean = false;  // For success state
  @Input() error: boolean = false;    // For error state
  @Input() text!: string;

}

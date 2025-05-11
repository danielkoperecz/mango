import {AfterViewInit, Component, forwardRef, Input, ViewChild} from '@angular/core';
import {CardDirective} from '../../directives/functional/card.directive';
import {FlexDirective} from '../../directives/structural/flex.directive';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  hostDirectives: [
    CardDirective,
    {
      directive: FlexDirective,
      inputs: ['direction'],
    }]
})
export class CardComponent {
  @Input() direction: 'row' | 'column' = 'column';
}

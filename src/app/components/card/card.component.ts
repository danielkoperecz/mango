import {Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {CardDirective} from '../../directives/functional/card.directive';
import {FlexDirective} from '../../directives/structural/flex.directive';
import {FlexColumnDirective} from '../../directives/structural/flex-column.directive';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  hostDirectives: [
    {
      directive: CardDirective,
      inputs: ['rounded']
    },
    {
      directive: FlexColumnDirective,
      inputs: ['wrap', 'align', 'justify']
    }]
})
export class CardComponent {
  @Input() wrap?: ' wrap' | 'no-wrap';
  @Input() justify?: 'space-between' | 'start' | 'end' | 'space-evenly';
  @Input() align?: 'center' | 'start' | 'end';
  @Input() rounded?: boolean;

}

import {Component, Input} from '@angular/core';
import {FlexDirective} from '../../directives/structural/flex.directive';

@Component({
  selector: 'app-flex',
  imports: [],
  templateUrl: './flex.component.html',
  hostDirectives: [{
    directive: FlexDirective,
    inputs: ['direction', 'wrap', 'justify', 'align']
  }],
})
export class FlexComponent {
  @Input() direction?: 'row' | 'column';
  @Input() wrap?: 'wrap' | 'no-wrap';
  @Input() justify?: 'space-between' | 'start' | 'end' | 'space-evenly';
  @Input() align?: 'center' | 'start' | 'end';
}

import {Component, Input} from '@angular/core';
import {FlexDirective} from '../../directives/structural/flex.directive';

@Component({
  selector: 'app-flex',
  imports: [],
  templateUrl: './flex.component.html',
  hostDirectives: [{
    directive: FlexDirective,
    inputs: ['direction', 'wrap', 'align']
  }],
})
export class FlexComponent {
  @Input() direction: 'row' | 'column' = 'row';
  @Input() wrap: ' wrap' | '' = '';
  @Input() align: string = 'space-between center';
}

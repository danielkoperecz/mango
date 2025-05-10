import {Component, Input} from '@angular/core';
import {FlexComponent} from '../flex/flex.component';
import {FlexDirective} from '../../directives/structural/flex.directive';
import {HeaderDirective} from '../../directives/structural/header.directive';

@Component({
  selector: 'app-header',
  imports: [],
  hostDirectives: [
    {
    directive: FlexDirective,
    inputs: ['direction', 'wrap', 'align']
    },
    {
      directive: HeaderDirective,
      inputs: ['sticky']
    },
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() direction: 'row' | 'column' = 'row';
  @Input() wrap: ' wrap' | '' = '';
  @Input() align: string = 'space-between start';
  @Input() sticky: boolean = false;
}

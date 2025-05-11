import {Component, Input} from '@angular/core';
import {FlexComponent} from '../flex/flex.component';
import {FlexDirective} from '../../directives/structural/flex.directive';
import {HeaderDirective} from '../../directives/structural/header.directive';
import {FlexRowDirective} from '../../directives/structural/flex-row.directive';

@Component({
  selector: 'app-header',
  imports: [],
  hostDirectives: [
    {
    directive: FlexRowDirective,
    inputs: ['wrap', 'align', 'justify']
    },
    {
      directive: HeaderDirective,
      inputs: ['sticky']
    },
  ],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() wrap?: ' wrap' | 'no-wrap';
  @Input() justify?: 'space-between' | 'start' | 'end' | 'space-evenly';
  @Input() align?: 'center' | 'start' | 'end';
  @Input() sticky?: boolean;
}

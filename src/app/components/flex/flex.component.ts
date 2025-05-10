import { Component } from '@angular/core';
import {FlexDirective} from '../../directives/structural/flex.directive';

@Component({
  selector: 'app-flex',
  imports: [],
  templateUrl: './flex.component.html',
  hostDirectives: [FlexDirective],
})
export class FlexComponent {

}

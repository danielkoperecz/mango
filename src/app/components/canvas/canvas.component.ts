import { Component } from '@angular/core';
import {CanvasDirective} from '../../directives/structural/canvas.directive';

@Component({
  selector: 'app-canvas',
  imports: [],
  templateUrl: './canvas.component.html',
  hostDirectives: [CanvasDirective]
})
export class CanvasComponent {

}

import {Component, Input} from '@angular/core';
import {GridDirective} from '../../directives/structural/grid.directive';
import {HoverGrowDirective} from '../../directives/animations/hover-grow.directive';

@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  hostDirectives: [
    {
      directive: GridDirective,
      inputs: ['columns'], // expose 'columns' input from directive
    },
  ],
})
export class GridComponent {
  @Input() columns: string[] = [];
}

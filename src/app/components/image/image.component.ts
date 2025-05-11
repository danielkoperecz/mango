import {Component, Input} from '@angular/core';
import {ImageDirective} from '../../directives/functional/image.directive';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.component.html',
  hostDirectives: [
    {
      directive: ImageDirective,
      inputs: ['src']
    }
  ]
})
export class ImageComponent {
  @Input() src!: string;
}

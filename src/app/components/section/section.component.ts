import { Component } from '@angular/core';
import {SectionDirective} from '../../directives/structural/section.directive';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  hostDirectives: [SectionDirective]
})
export class SectionComponent {}

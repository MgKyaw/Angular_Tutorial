import { Component, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetContentDirective } from '../directives/greet-content.directive';

@Component({
  selector: 'app-content-projection-sample',
  standalone: true,
  imports: [CommonModule, GreetContentDirective],
  templateUrl: './content-projection-sample.component.html',
  styleUrls: ['./content-projection-sample.component.css']
})
export class ContentProjectionSampleComponent {
  show = false;
  @ContentChild(GreetContentDirective) greet!: GreetContentDirective;
}
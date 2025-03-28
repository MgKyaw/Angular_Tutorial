import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentProjectionSampleComponent } from './content-projection-sample/content-projection-sample.component';
import { GreetContentDirective } from './directives/greet-content.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentProjectionSampleComponent, GreetContentDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectionSample';
}

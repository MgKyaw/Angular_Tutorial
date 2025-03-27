import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentProjectionSampleComponent } from './content-projection-sample/content-projection-sample.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContentProjectionSampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectionSample';
}

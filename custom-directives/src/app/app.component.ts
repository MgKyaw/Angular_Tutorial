import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomstyleDirective } from './customstyle.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CustomstyleDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'custom-directives';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterFormComponent } from '../../../event-binding/src/app/register-form/register-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegisterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'property-binding';
}

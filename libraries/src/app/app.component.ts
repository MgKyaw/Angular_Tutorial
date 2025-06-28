import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { InputTextModule } from 'primeng/inputtext';
import { fromEvent } from 'rxjs';
fromEvent(document, 'click').subscribe(() => console.log('You Clicked!'));

@Component({
  selector: 'app-root',
  imports: [MatInputModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libraries';
}

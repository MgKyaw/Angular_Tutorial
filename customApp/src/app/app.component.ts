import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ChildComponentComponent],
  template: `<h3>{{ title }}</h3>
             <app-child-component [(val)]="user"></app-child-component> 
             <p>Hello {{ user }}!</p>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Two Way Binding Example';
  user: string = "";
}
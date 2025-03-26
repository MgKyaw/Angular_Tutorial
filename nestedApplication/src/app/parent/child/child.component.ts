import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  styles: 'p { border: 1px solid blue; border-radius: 25px; padding: 16px 32px; }'
})
export class ChildComponent {

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-child-counter',
  imports: [],
  templateUrl: './child-counter.component.html',
  styleUrl: './child-counter.component.css'
})
export class ChildCounterComponent {
  counter: number = 0
  // increment and decrement counter  
  inc() { this.counter++ }
  dec() { this.counter-- }
}

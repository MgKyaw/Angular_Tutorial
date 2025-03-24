import { Component, ViewChild, AfterViewInit } from '@angular/core';

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

export class VcParentCounterComponent implements AfterViewInit {
  ngAfterViewInit() {
     // ...
  }
}

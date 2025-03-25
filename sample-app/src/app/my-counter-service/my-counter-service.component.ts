import { Component } from '@angular/core';
import { MyCounterService } from '../services/my-counter.service';

@Component({
  selector: 'app-my-counter-service',
  imports: [],
  templateUrl: './my-counter-service.component.html',
  styleUrl: './my-counter-service.component.css',
})
export class MyCounterServiceComponent {
  counter: number = 0;

  constructor(private counterService: MyCounterService) {
    this.counterService.counter$.subscribe((counter) => {
      this.counter = counter;
    });
  }

  inc() {
    this.counterService.inc(this.counter);
  }
  dec() {
    this.counterService.dec(this.counter);
  }
}

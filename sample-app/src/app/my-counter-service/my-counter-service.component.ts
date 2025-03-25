import { Component } from '@angular/core';
import { MyCounterService } from '../services/my-counter.service';

@Component({
  selector: 'app-my-counter-service',
  imports: [],
  templateUrl: './my-counter-service.component.html',
  styleUrl: './my-counter-service.component.css'
})
export class MyCounterServiceComponent {
  constructor(private counterService: MyCounterService) {
  }
}

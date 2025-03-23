import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewEncapsulationSampleComponent } from './view-encapsulation-sample/view-encapsulation-sample.component';
import { InOutChildSampleComponent } from './in-out-child-sample/in-out-child-sample.component';
import { ChildCounterComponent } from './child-counter/child-counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ViewEncapsulationSampleComponent, InOutChildSampleComponent, ChildCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample-app';
  counter = 10;
  childCounter: number = 0;   
  inc() {
     this.counter++
  }   
  get(val: number) {
     this.childCounter = val;
  } 
}

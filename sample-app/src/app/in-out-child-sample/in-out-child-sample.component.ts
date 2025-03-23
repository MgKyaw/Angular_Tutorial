import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-in-out-child-sample',
  imports: [],
  templateUrl: './in-out-child-sample.component.html',
  styleUrl: './in-out-child-sample.component.css'
})
export class InOutChildSampleComponent {
  @Input() counter : number = 0;
  @Output() counterEvent = new EventEmitter<number>();
  passCounterToParent() {
    this.counterEvent.emit(this.counter)
 }
}

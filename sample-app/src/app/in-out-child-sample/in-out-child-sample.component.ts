import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-in-out-child-sample',
  imports: [],
  templateUrl: './in-out-child-sample.component.html',
  styleUrl: './in-out-child-sample.component.css'
})
export class InOutChildSampleComponent {
  @Input()
   get counter(): number { return this._counter; }
   set counter(val: number) {
      this._counter = val || 0;
      if(val > 25) this._counter = val % 25;
   }
   private _counter: number = 1;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-in-out-child-sample',
  imports: [],
  templateUrl: './in-out-child-sample.component.html',
  styleUrl: './in-out-child-sample.component.css'
})
export class InOutChildSampleComponent {
  @Input() counter : number = 0;
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-encapsulation-sample',
  standalone: true,
  imports: [ViewEncapsulationSampleComponent],
  templateUrl: './view-encapsulation-sample.component.html',
  styleUrl: './view-encapsulation-sample.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewEncapsulationSampleComponent {
  
}

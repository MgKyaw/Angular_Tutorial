import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emp-card',
  imports: [],
  templateUrl: './emp-card.component.html',
  styleUrl: './emp-card.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class EmpCardComponent {
  @Input() name: string = '';
  @Input() role: string = '';
}

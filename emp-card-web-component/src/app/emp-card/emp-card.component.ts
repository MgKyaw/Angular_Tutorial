import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emp-card',
  standalone: true,
  // imports: [],
  templateUrl: './emp-card.component.html',
  styleUrl: './emp-card.component.css',
})
export class EmpCardComponent {
  @Input() name: string = '';
  @Input() role: string = '';
}

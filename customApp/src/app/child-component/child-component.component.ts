import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [FormsModule],
  template: '<input [value]="val" (input)="onValChange($event)" />',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  @Input() val: string = '';
  @Output() valChange: EventEmitter<string> = new EventEmitter<string>();

  onValChange(event: Event) {
    // Cast the event target to HTMLInputElement and access the value
    const input = event.target as HTMLInputElement;
    if (input) {
      this.valChange.emit(input.value);
    }
  }
}
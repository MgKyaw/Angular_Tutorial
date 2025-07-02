import { Component, OnInit, Signal, signal, computed, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signals-app';

  count = signal(0);
  increase() {
    this.count.set(this.count()+1);
  }
  decrease() {
    this.count.set(this.count()-1);
  }

  length: WritableSignal<number> = signal(20);
  breadth: WritableSignal<number> = signal(40);
  area: any= 0;
  calculate() {
    this.area = computed(() => this.length() * this.breadth());
  }
}

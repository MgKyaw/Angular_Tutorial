import { Component, OnInit, Signal, signal, computed, WritableSignal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    effect(() => {
      console.log("Effect due to count signal is trigger: " + this.count());
    });

    
    effect(() => {
      console.log("Effect due to color signal is trigger: " + this.color());
    });
  }

  title = 'signals-app';

  count = signal(0);
  color = signal(["red", "green"]);

  display() {
    this.count.set(30);
    this.color.update(value => [...value, "Yellow"]);
  }

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

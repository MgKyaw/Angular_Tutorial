import { Component, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet],
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
}

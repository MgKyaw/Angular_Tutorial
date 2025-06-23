import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('backgroundColorChange', [
      state(
        'default',
        style({
          backgroundColor: 'rgb(174, 5, 174)',
        })
      ),
      state(
        'hovered',
        style({
          backgroundColor: 'rgb(248, 174, 225)',
        })
      ),
      transition('default <=> hovered', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class AppComponent {
  title = 'Animation Example';
  isHovered = false;
}
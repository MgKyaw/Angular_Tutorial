import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-chart',
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  fruits : Fruit[] = [
    {
       name: 'Apple',
       count: 10
    },
    {
       name: 'Orange',
       count: 20
    },
    {
       name: 'Lemon',
       count: 5
    }
 ]
}

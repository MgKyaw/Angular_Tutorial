import { Component } from '@angular/core';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-chart',
  imports: [],
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

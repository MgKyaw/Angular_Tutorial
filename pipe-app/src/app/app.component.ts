import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LowerCasePipe, UpperCasePipe, SlicePipe, CurrencyPipe, PercentPipe } from '@angular/common';
import { DigitcountPipe } from './digitcount.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, LowerCasePipe, UpperCasePipe, SlicePipe, CurrencyPipe, PercentPipe, DigitcountPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe-app';
  presentDate = new Date();
  TutorialName: string = 'Angular'; 
  chapterList: string[] = ["Binding", "Pipe", "Services"];
  newValue: number = 54213;
  digits : number = 100; 
}

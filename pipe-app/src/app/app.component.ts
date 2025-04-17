import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe } from '@angular/common';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, LowerCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pipe-app';
  presentDate = new Date();
  TutorialName: string = 'Angular'; 
  chapterList: string[] = ["Binding", "Pipe", "Services"];
}

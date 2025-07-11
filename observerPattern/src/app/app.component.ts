import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ObserverService } from './observer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  constructor(private myService: ObserverService) {}
  //variable to store the color
  background: any;
  changeBackground(){
    this.myService.getRandColors().subscribe(color =>{
	//assigning value
      this.background = color;
    });
  }
}
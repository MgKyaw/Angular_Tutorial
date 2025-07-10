import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  ngOnInit() {
    try {
      // code that might throw an error
      throw new Error("Error message");
    } catch (error) {
      console.error("error caught", error);
    }
  }
}
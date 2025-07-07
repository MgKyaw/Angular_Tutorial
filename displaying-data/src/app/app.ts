import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'displaying-data';
  num: number = 10;
  isTrue: boolean = true;
  username: string = "mgkyaw.dev@gmail.com";
  myData = [
    {
      "id": 1,
      "name": 'abc',
      "age": 24
    },
    {
      "id": 2,
      "name": "xyz",
      "age": 20,
    },
    {
      "id": 3,
      "name": "red",
      "age": 30
    }
  ];
}

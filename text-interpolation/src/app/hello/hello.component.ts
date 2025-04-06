import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  user: string = "Kyawwww!!!!!"

  myAction(e: any) {
    e.preventDefault();
    console.log(e);
    alert('I am the action function for click event');
 }
}

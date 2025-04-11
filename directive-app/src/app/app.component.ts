import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'directive-app';
  dark = "";
  changeBckgrd() {
    if(this.dark == "") {
      this.dark = "darkCol";
    } else {
      this.dark = "";
    }
  }
}

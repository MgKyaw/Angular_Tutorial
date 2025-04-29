import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  constructor(private router: Router){}

  open(data: any){
    if(data === "product"){
	  //here used navigate() to set navigation manually
      this.router.navigate(["/product"]);
    }
    else if(data === "inventory"){
      this.router.navigate(["/inventory"]);
    }
  }
}
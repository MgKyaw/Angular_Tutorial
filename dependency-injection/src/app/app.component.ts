import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataproviderService } from './dataprovider.service';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   color: string[];
   
   constructor(private colorService: DataproviderService) {
      this.color = this.colorService.getData(); 
   }
}

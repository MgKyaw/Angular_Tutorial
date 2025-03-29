import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CheckBioComponent } from './check-bio/check-bio.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CheckBioComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicComponent';

  user = {"name": "Admin", "isAdmin": false}
  isValid = false;
  admin(){
    this.user.isAdmin = true;
    this.isValid = true;
  }
  userLog(){
    this.user.isAdmin = false;
    this.isValid = true;
  }
}
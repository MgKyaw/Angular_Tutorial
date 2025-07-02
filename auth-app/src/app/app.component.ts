import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthService } from './Services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseEntryListComponent, LoginComponent, LogoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Angular Authentication';
    isUserLoggedIn: any = false;
    router: any;

    constructor(private authService: AuthService) {}

    ngOnInit() {
      // Subscribe to the isUserLoggedIn observable from AuthService
      this.authService.isUserLoggedIn$.subscribe(status => {
        this.isUserLoggedIn = status;
        console.log("Is User Logged In: ", this.isUserLoggedIn);
      });
    }
    logout(): void {
	   // Trigger logout in AuthService
       this.authService.logout();
	   // Redirect to the homepage after logout
       this.router.navigate(['/']); 
    }
}
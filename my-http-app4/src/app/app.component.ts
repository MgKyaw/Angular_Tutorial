import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-http-app4';
}

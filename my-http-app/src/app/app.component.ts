import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClient, ListExpensesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-http-app';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntry } from './expense-entry/expense-entry';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseEntry],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Expense Manager';
}

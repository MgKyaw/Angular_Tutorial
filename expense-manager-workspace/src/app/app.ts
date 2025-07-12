import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ExpenseEntry } from './expense-entry/expense-entry';

@Component({
  selector: 'app-root',
  imports: [ ExpenseEntry],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Expense Manager';
}

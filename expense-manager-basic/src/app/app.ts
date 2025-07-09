import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntry } from './expense-entry/expense-entry';
import { ExpenseEntryList } from './expense-entry-list/expense-entry-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExpenseEntry, ExpenseEntryList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Expense Manager';
}

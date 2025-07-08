import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryComponent } from './expense-entry/expense-entry';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExpenseEntryComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Expense Manager';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  standalone: true,
  imports: [ExpenseEntryComponent],
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.css'
})
export class ExpenseEntryComponent {
  title: any;
  constructor() {}
  ngOnInit(): void {
    this.title = "Expense Entry"
  }
}

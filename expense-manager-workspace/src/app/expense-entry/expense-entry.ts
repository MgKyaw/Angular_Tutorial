import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  imports: [],
  templateUrl: './expense-entry.html',
  styleUrl: './expense-entry.css'
})
export class ExpenseEntry implements OnInit {
  title: string = "";
  constructor() {}

  ngOnInit(): void {
    this.title = "Expense Entry";
  }
}

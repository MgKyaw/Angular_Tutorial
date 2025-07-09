import { Component, OnInit } from '@angular/core';

export interface ExpenseEntryInterface {
  id: number;
  item: string;
  amount: number;
  category: string;
  location: string;
  spendOn: Date;
  createdOn: Date;
}

@Component({
   selector: 'app-expense-entry',
   standalone: true,
   imports: [],
   templateUrl: './expense-entry.html',
   styleUrl: './expense-entry.css'
})
export class ExpenseEntry implements OnInit {
   title: string = "";
   constructor() { }
   
   ngOnInit() {
      this.title = "Expense Entry"
   }
}
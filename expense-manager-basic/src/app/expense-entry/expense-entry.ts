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
   expenseEntryInterface!: ExpenseEntryInterface;
   constructor() { }
   
   ngOnInit() {
      this.title = "Expense Entry";
      this.expenseEntryInterface = {
         id: 1,
         item: "Pizza",
         amount: 21,
         category: "Food",
         location: "Zomato",
         spendOn: new Date(2025, 6, 1, 10, 10, 10),
         createdOn: new Date(2025, 6, 1, 10, 10, 10),
      };
  }
}
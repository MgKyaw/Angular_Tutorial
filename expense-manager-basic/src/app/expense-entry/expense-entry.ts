import { Component, OnInit } from '@angular/core';

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
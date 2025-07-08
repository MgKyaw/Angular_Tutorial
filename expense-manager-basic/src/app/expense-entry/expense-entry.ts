import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-expense-entry',
   standalone: true,
   imports: [],
   templateUrl: './expense-entry.component.html',
   styleUrl: './expense-entry.component.css'
})
export class ExpenseEntryComponent implements OnInit {
   title: string = "";
   constructor() { }
   
   ngOnInit() {
      this.title = "Expense Entry"
   }
}
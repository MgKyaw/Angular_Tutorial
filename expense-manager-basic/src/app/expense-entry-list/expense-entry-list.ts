import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface ExpenseEntry {
   id: number;
   item: string;
   amount: number;
   category: string;
   location: string;
   spendOn: Date;
   createdOn: Date;
}

@Component({
   selector: 'app-expense-entry-list',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './expense-entry-list.html',
   styleUrl: './expense-entry-list.css'
})
export class ExpenseEntryListComponent {
   getExpenseEntries() : ExpenseEntry[] { 
     let mockExpenseEntries : ExpenseEntry[] = [ 
        { id: 1, 
           item: "Pizza", 
           amount: Math.floor((Math.random() * 10) + 1), 
           category: "Food", 
           location: "Mcdonald", 
           spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
           createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
        { id: 1, 
           item: "Pizza", 
           amount: Math.floor((Math.random() * 10) + 1), 
           category: "Food", 
           location: "KFC", 
           spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
           createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
        { id: 1,
           item: "Pizza",
           amount: Math.floor((Math.random() * 10) + 1), 
           category: "Food", 
           location: "Mcdonald", 
           spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
           createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
        { id: 1, 
           item: "Pizza", 
           amount: Math.floor((Math.random() * 10) + 1), 
           category: "Food", 
           location: "KFC", 
           spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
           createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
        { id: 1, 
           item: "Pizza", 
           amount: Math.floor((Math.random() * 10) + 1), 
           category: "Food", 
           location: "KFC", 
           spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
           createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) 
        }, 
     ]; 
     return mockExpenseEntries; 
   }
   title: string =""; 
   expenseEntries!: ExpenseEntry[]; 
   constructor() { } 
   ngOnInit() { 
      this.title = "Expense Entry List"; 
      this.expenseEntries = this.getExpenseEntries(); 
   }
}
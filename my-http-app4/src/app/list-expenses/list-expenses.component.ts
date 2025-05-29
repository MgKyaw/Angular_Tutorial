import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Expense from '../ListExpenses';

@Component({
   selector: 'app-list-expenses',
   templateUrl: './list-expenses.component.html',
   styleUrls: ['./list-expenses.component.css']	
})

export class ListExpensesComponent implements OnInit{
   expenses: Expense[] = [];
   newexpense: Expense | null = null;   
   constructor(private http: HttpClient) { }   
   ngOnInit(): void {
   
   }
}

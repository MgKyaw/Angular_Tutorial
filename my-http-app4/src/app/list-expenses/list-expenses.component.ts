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
   constructor(private http: HttpClient) { }   
   ngOnInit(): void {
   
   this.http.jsonp<Expense[]>
   ('http://localhost:8000/api/jsonp/expense','callback').subscribe(data =>{
         this.expenses = data as Expense[]
         console.log(this.expenses)
      })   
   }
}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Expense from '../ListExpenses';

@Component({
   selector: 'app-list-expenses',
   templateUrl: './list-expenses.component.html',
   styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
   expenses: Expense[] = [];
   newexpense: Expense | null = null;   
   constructor(private http: HttpClient) { }   
   ngOnInit(): void {   
      var spend_date = new Date();
      spend_date.setDate(spend_date.getDate() - 1);
      this.newexpense = {
         'item': 'new item ' + Math.floor(Math.random() * 10),
         'amount': Math.floor(Math.random() * 100),
         'category': 'Food',
         'location': 'KFC',
         'spendOn': spend_date
      }   
   }
}
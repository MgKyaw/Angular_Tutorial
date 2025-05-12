import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import Expense from '../../Expense';

@Component({
  selector: 'app-list-expenses',
  imports: [],
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.css'
})
export class ListExpensesComponent implements OnInit {

  expenses: Expense[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
      let req = new HttpRequest(
         'GET',
         'http://localhost:8000/api/expense',{
            responseType: 'json'
         }
      )

      this.http.request<Expense[]>(req)
      .subscribe((data : HttpEvent<Expense[]> )=> {
         this.expenses = (data as HttpResponse<Expense[]>).body as Expense[]
         console.log(this.expenses)
      })
  }
}

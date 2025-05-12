import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    
  }
}

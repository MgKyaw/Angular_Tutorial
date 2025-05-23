import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Expense from '../Expense';

@Component({
  selector: 'app-list-expense',
  imports: [],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent implements OnInit {
  expenses: Expense[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

}

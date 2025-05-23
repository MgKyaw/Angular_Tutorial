import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-expense',
  imports: [],
  templateUrl: './list-expense.component.html',
  styleUrl: './list-expense.component.css'
})
export class ListExpenseComponent {

  constructor(private http: HttpClient) {}

}

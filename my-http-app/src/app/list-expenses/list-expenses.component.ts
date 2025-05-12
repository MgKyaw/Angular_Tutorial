import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-expenses',
  imports: [],
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.css'
})
export class ListExpensesComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
  }
}

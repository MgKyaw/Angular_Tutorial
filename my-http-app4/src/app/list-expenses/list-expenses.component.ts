import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-list-expenses',
   templateUrl: './list-expenses.component.html',
   styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent {

   constructor(private http: HttpClient) { }
}
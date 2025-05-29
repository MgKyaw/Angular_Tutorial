import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
   selector: 'app-list-expenses',
   templateUrl: './list-expenses.component.html',
   styleUrls: ['./list-expenses.component.css']	
})

export class ListExpensesComponent implements OnInit{
   constructor(private http: HttpClient) { }   
   ngOnInit(): void {
   
   }
}

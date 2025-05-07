import { Injectable } from '@angular/core';
// import { ExpenseEntry} from './expense-entry';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService {
  private expenseRestUrl = 'http://localhost:8000/api/expense';
  private httpOptions = { 
    headers: new HttpHeaders( { 'Content-Type': 'application/json' }) 
 };

  constructor(private httpClient : HttpClient) { }
}

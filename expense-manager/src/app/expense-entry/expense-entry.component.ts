import { Component, OnInit } from '@angular/core';
import { ExpenseEntryService } from '../expense-entry.service';

@Component({
  selector: 'app-expense-entry',
  standalone: true,
  imports: [ExpenseEntryComponent],
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.css'
})
export class ExpenseEntryComponent {
  title: any;
  constructor(private restService : ExpenseEntryService ) { }
  ngOnInit(): void {
    this.title = "Expense Entry"
  }
}

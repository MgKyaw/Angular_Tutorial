import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  totalItems = 10;  // Total number of items 
  pageSize = 5;     // Number of items per page
  data: any[] = []; 
  currentPage = 0;   

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const start = this.currentPage * this.pageSize;
    this.data = Array.from({ length: this.pageSize }, (_, i) => `Item ${start + i + 1}`);
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }
}
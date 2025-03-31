import { Component } from '@angular/core';
import { DynData } from '../dyn-data';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-dyn-table',
   imports: [CommonModule],
   templateUrl: './dyn-table.component.html',
   styleUrls: ['./dyn-table.component.css']
})
export class DynTableComponent implements DynData {
   data: any[] = []
}
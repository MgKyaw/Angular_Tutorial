import { Component } from '@angular/core';
import { DynData } from '../dyn-data';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-dyn-list',
   imports: [CommonModule],
   templateUrl: './dyn-list.component.html',
   styleUrls: ['./dyn-list.component.css']
})
export class DynListComponent implements DynData {
   data: any[] = []
}
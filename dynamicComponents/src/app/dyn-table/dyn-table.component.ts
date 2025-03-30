import { Component } from '@angular/core';
import { DynData } from '../dyn-data'

@Component({
   selector: 'app-dyn-table',
   templateUrl: './dyn-table.component.html',
   styleUrls: ['./dyn-table.component.css']
})
export class DynTableComponent implements DynData {
   data: any[] = []
}
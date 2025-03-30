import { Component } from '@angular/core';
import { DynData } from '../dyn-data'

@Component({
   selector: 'app-dyn-list',
   templateUrl: './dyn-list.component.html',
   styleUrls: ['./dyn-list.component.css']
})
export class DynListComponent implements DynData {
   data: any[] = []
}
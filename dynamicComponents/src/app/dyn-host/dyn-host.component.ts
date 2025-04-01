import { Component, ViewContainerRef, OnInit, ViewChild, Input } from '@angular/core';
import { DynData } from '../dyn-data'
import { DynSampleDirective } from '../dyn-sample.directive'
import { DynListComponent } from '../dyn-list/dyn-list.component'
import { DynTableComponent } from '../dyn-table/dyn-table.component'

@Component({
   selector: 'app-dyn-host',
   imports: [DynSampleDirective],
   templateUrl: './dyn-host.component.html',
   styleUrls: ['./dyn-host.component.css']
})
export class DynHostComponent implements OnInit {
   @Input() format: string = 'table'
   
   private data = [
   {
      'name': 'John',
      'role': "Manager"
   },
   {
      'name': 'Peter',
      'role': "Marketing Intern"
   },
   {
      'name': 'Mary',
      'role': "Technical Intern"
   },
   {
      'name': 'Jack',
      'role': "Sales Manager"
   },
   {
      'name': 'Jessica',
      'role': "Delivery Head"
   },
   ]
   
   @ViewChild(DynSampleDirective, {static: true }) host!: DynSampleDirective;
   
   ngOnInit() {    
      const viewContainerRef = this.host.viewContainerRef;
      viewContainerRef.clear();
    
      if (this.format === 'table') {
        const compRef = viewContainerRef.createComponent<DynData>(DynTableComponent);
        compRef.instance.data = this.data;
      } else {
        const compRef = viewContainerRef.createComponent<DynData>(DynListComponent);
        compRef.instance.data = this.data;
      }
   }
}
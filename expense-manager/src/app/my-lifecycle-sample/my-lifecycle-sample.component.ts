import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
   selector: 'app-my-lifecycle-sample',
   templateUrl: './my-lifecycle-sample.component.html',
   styleUrls: ['./my-lifecycle-sample.component.css']
})
export class MyLifecycleSampleComponent implements OnChanges, OnInit {

   ngOnChanges() {
      console.log("Change detection")
   }

   ngOnInit() {
      console.log("Initialization of component / directive")
   }
   
   ngDoCheck() {
      console.log("Custom change detection")
   }
   
   ngAfterContentInit() {
      console.log("Content initialization")
   }
   
   ngAfterContentChecked() {
      console.log("Checking changes in content")
   }
   
   ngAfterViewInit() {
      console.log("View initialization")
   }
   
   ngAfterViewChecked() {
      console.log("Checking changes in views")
   }
   
   ngOnDestroy() {
      console.log("Destruction of component / directive")
   }

}
import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynSample]'
})
export class DynSampleDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}

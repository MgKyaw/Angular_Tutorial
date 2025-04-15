import { Directive, ElementRef } from '@angular/core';
@Directive({
  selector: '[appCustomstyle]',
  standalone: true
})
export class CustomstyleDirective {
  constructor(el: ElementRef) { 
    el.nativeElement.style.fontSize = '24px';
  }
}
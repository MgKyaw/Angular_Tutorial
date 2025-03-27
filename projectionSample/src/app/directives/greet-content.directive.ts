import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appGreetContent]',
  standalone: true
})
export class GreetContentDirective {

  constructor(public template: TemplateRef<any>) { }

}
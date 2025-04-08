import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  isPurple: boolean = true;
  btnClass: Record<string, boolean> = {
    'purple': true,
    'smallcaps': true
 }
}

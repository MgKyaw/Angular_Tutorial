import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerAccount(e: Event) {
    e.preventDefault();
    alert('The form submission is prevented');
 }
}

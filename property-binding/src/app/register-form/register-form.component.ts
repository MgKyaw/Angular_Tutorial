import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  placeholder1: string = 'Enter username';
  placeholder2: string = 'Enter password';
  placeholder3: string = 'Repeat password';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  imports: [],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  btnStyle: Record<string, string> = {
    'backgroundColor': 'purple',
    'color': 'white',
    'padding': '15px 20px',
    'margin': '10px 0',
    'border': 'none',
    'cursor': 'pointer',
    'width': '100%'
 }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  user: any = {
    username: '',
    password: '',
    confirmPassword: ''
 }

 showInfo(e: Event) {
  e.preventDefault();
  let info: string = '';
  info += 'Username = ' + this.user.username;
  info += '\nPassword = ' + this.user.password;
  info += '\nConfirm password = ' + this.user.confirmPassword;
  alert(info)
}
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, FormsModule, CommonModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   user = {
      email: '',
      password: ''
   };
   onSubmit(form: any) {
      if (form.valid) {
         console.log('Form Submitted!', this.user);
      }
   }
}
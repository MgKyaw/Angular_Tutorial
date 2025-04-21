// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//    selector: 'app-root',
//    standalone: true,
//    imports: [RouterOutlet, FormsModule, CommonModule],
//    templateUrl: './app.component.html',
//    styleUrl: './app.component.css'
// })
// export class AppComponent {
//    user = {
//       email: '',
//       password: ''
//    };
//    onSubmit(form: any) {
//       if (form.valid) {
//          console.log('Form Submitted!', this.user);
//       }
//    }
// }

import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   loginForm: FormGroup;
   
   constructor() {
      this.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      });
   }

   onSubmit() {
      if (this.loginForm.valid) {
         console.log('Form Submitted!', this.loginForm.value);
      } else {
         console.log('Form is not valid');
      }
   }
}
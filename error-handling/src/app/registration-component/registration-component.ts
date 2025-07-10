import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-registration',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './registration.component.html',
   styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
   registrationForm: FormGroup;
   
   constructor(private fb: FormBuilder) {
      this.registrationForm = this.fb.group({
         username: ['', [Validators.required, Validators.minLength(4)]],
         email: ['', [Validators.required, Validators.email]],
      });
   }
   
   onSubmit() {
      if (this.registrationForm.invalid) {
         this.showValidationErrors();
         return;
      }
   }
   
   private showValidationErrors() {
      Object.keys(this.registrationForm.controls).forEach(control => {
         const formControl = this.registrationForm.get(control);
         if (formControl?.invalid) {
            console.error(`${control} is invalid`);
         }
      });
   }
}
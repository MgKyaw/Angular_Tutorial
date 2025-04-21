import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'  
})
export class AppComponent implements OnInit {
   title = 'Dynamic Form Example';
   dynamicForm: FormGroup = new FormGroup({});
   fields: any[] = [
      { type: 'text', name: 'firstName', label: 'First Name: ', value: '', required: true },
      { type: 'text', name: 'lastName', label: 'Last Name: ', value: '', required: true },
      { type: 'email', name: 'email', label: 'Email: ', value: '', required: true },
      { type: 'select', name: 'country', label: 'Country: ', value: '', required: true, options: ['USA', 'India', 'Israel'] }
   ];
   
   constructor(private fb: FormBuilder) {}
   
   ngOnInit() {
      this.createForm();
      this.onCountryChange(); 
   }
   
   createForm() {
      const group: Record<string, any> = {};
	  
      this.fields.forEach(field => {
         if (field.type === 'select') {
            group[field.name] = [field.value, field.required ? Validators.required : []];
         } else {
            group[field.name] = [field.value, field.required ? Validators.required : []];
         }
      });
	  
      // Adding country-specific fields initially
      group['countryCode'] = [''];  
      group['phoneNumber'] = [''];  
	  
      this.dynamicForm = this.fb.group(group);
   }
   
   onCountryChange() {
      this.dynamicForm.get('country')?.valueChanges.subscribe(country => {
         // to modify the countryCode and phoneNumber fields
         if (country === 'USA') {
           this.dynamicForm.get('countryCode')?.setValue('+1');
         } else if (country === 'India') {
           this.dynamicForm.get('countryCode')?.setValue('+91');
         } else if (country === 'Israel') {
           this.dynamicForm.get('countryCode')?.setValue('+972');
         } else {
           this.dynamicForm.get('countryCode')?.setValue('');
         }
      });
   }
   
   onSubmit() {
      console.log(this.dynamicForm.value);
   }
}
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterOutlet, MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, CommonModule],
   templateUrl: './app.component.html',
   styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'Dropdown Example';
   selectedValue: string = "";
   
   options = [
      { value: 'option1', viewValue: 'Red' },
      { value: 'option2', viewValue: 'Saffron' },
      { value: 'option3', viewValue: 'Violet' },
      { value: 'option4', viewValue: 'Gray' }
   ];
}
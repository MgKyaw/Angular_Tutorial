import { Component, OnInit } from '@angular/core';
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
export class AppComponent implements OnInit {
  title = 'template-form-app';
  username: string = ""; 
  submitted: boolean = false; 
  ngOnInit() { } 
  onClickSubmit(result: { username: string; }) { 
    this.username = result.username; 
    this.submitted = true; 
  }
}
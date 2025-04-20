import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'form-app';
  userName: string = ""; 
  formdata: FormGroup = new FormGroup({});
  ngOnInit() { 
    this.formdata = new FormGroup({ 
      userName: new FormControl("") 
    }); 
  } 
  onClickSubmit(data: { userName: string }) { 
    this.userName = data.userName; 
  }
}
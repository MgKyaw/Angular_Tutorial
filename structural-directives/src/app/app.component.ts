import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // code
  }
  title = 'structural-directives';
  logInName = 'admin'; 
  
  showData = false; 
  show() { 
    this.showData = !this.showData; 
  }
  list = [1,2,3,4,5];

  studentArr: any[] = [ { 
    "id": 1, 
    "name": "student1" 
 }, 
 { 
    "id": 2,
    "name": "student2" 
 }, 
 { 
    "id": 3, "name": "student3"
 },
 { 
    "id": 4, 
    "name": "student4" 
 } 
 ]; 
 trackByData(index:number, studentArr:any): number { 
    return studentArr.id; 
 }
}

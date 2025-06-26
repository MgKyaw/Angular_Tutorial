import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyCalcService } from '../my-calc.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent{
  //injecting service
  constructor(private myservice: MyCalcService){}
  n1: number = 0;
  n2: number = 0;
  result : any = "";

   add(){
    this.result = "Sum is (n1+n2): " + this.myservice.add(this.n1, this.n2);
   }
   subtract(){
    this.result = "Subtraction is(n1-n2): " + this.myservice.subtract(this.n1, this.n2);
   }
   multiply(){
    this.result = "Multiplication is(n1xn2): " + this.myservice.multiply(this.n1, this.n2);
   }
   divide(){
    this.result = "Division is(n1/n2): " + this.myservice.divide(this.n1, this.n2);
   }

}
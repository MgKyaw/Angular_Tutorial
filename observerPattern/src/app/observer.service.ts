import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {

  constructor() { }

  getRandColors(): Observable<string> { 
    return new Observable<string>(observer => { 
      let colors = ["red", "green", "black", "yellow", "blue", "pink", "gray"]; 
      let rand = Math.floor(Math.random() * colors.length); 
      observer.next(colors[rand]);
      observer.complete(); });
    }
}
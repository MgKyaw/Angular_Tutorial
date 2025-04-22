import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor() { }
  getData() {
    return ['Red', 'Orange', 'Violet', 'Yellow', 'Saffron'];
  }
}

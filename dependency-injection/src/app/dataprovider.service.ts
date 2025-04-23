import { Injectable } from '@angular/core';

@Injectable({
  // Inject service at Root level
  providedIn: 'root'
})
export class DataproviderService {

  constructor() { }
  getData() {
    return ['Red', 'Orange', 'Violet', 'Yellow', 'Saffron'];
  }
}

// Inject service at component level
// import { Injectable } from '@angular/core';

// @Injectable({

// })
// export class PrintNameService {

//    // some code...
   
//    constructor() { }
// }
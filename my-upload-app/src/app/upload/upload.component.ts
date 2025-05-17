import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
   selector: 'app-upload',
   templateUrl: './upload.component.html',
   styleUrls: ['./upload.component.css']
})
export class UploadComponent {
   constructor(private http: HttpClient) { }

   file?: File | null = null;
   message : String | null = null; 


}

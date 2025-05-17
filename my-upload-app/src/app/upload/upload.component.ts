import { Component } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  file?: File | null = null;
  message: String | null = null;

  constructor(private http: HttpClient) {}

  upload() {
    const formData: FormData = new FormData();
    formData.append('photo', this.file as Blob, this.file?.name);
    const myObservable: Observable<HttpEvent<any>> = this.http.post<any>(
      'http://localhost:8000/upload',
      formData,
      {
        observe: 'events',
        reportProgress: true,
      }
    );

    myObservable
      .pipe(
        map((data) => {
          console.log(data);
          return data;
        })
      )
      .subscribe((evt) => {
        this.message = this.getEventMessage(evt, this.file as File);
      });
  }

  private getEventMessage(event: HttpEvent<any>, file?: File) {
    let message: String | null = null;
    switch (event.type) {
      case HttpEventType.Sent:
        message = `Uploading file "${file?.name}" of size ${file?.size}.`;
        console.log(message);
        return message;

      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = event.total
          ? Math.round((100 * event.loaded) / event.total)
          : 0;
        message = `File "${file?.name}" is ${percentDone}% uploaded.`;
        console.log(message);
        return message;

      case HttpEventType.Response:
        message = `File "${file?.name}" was completely uploaded!`;
        console.log(message);
        return message;

      default:
        message = `File "${file?.name}" surprising upload event: ${event.type}.`;
        console.log(message);
        return message;
    }
  }
}

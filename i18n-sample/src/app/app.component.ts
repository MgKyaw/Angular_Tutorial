import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import localeHi from '@angular/common/locales/hi';

registerLocaleData(localeHi);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe],
  providers: [
    { provide: LOCALE_ID, useValue: 'hi' }  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Internationalization Sample';
  currentDate: number = Date.now();
}
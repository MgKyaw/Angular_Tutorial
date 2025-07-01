import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, scan } from 'rxjs';
import { from, Observable } from 'rxjs';
import { interval } from 'rxjs';

fromEvent(document, 'click')
  .pipe(scan((count) => count + 1, 0))
  .subscribe((count) => console.log('Clicked ${count} times'));

const data = from(fetch('/api/endpoint'));

data.subscribe({
  next(res) { console.log(res); },
  error(err) { console.error('Error: ' + err); },
  complete() { console.log('Completed'); }
})

const secondsCounter = interval(1000);

const subscription = secondsCounter.subscribe(n => 
  console.log(`It's been ${n + 1} seconds since the subscription started!`)
);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RxJS-app';
}

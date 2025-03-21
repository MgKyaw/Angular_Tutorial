import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { MyLifecycleSampleComponent } from './my-lifecycle-sample/my-lifecycle-sample.component';

@Component({
 selector: 'app-root',
 standalone: true,
 imports: [RouterOutlet, ExpenseEntryComponent, MyLifecycleSampleComponent],
 templateUrl: './app.component.html',
 styleUrl: './app.component.css'
})
export class AppComponent {
 title = 'expense-manager';
}
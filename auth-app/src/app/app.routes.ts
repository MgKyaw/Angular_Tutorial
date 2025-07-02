import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authenticateGuard } from './authenticate.guard';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'expenses', component: ExpenseEntryListComponent, canActivate: [authenticateGuard]},
    {path: ' ', redirectTo: '/login', pathMatch: 'full'}
];
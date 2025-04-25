import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'item', children:[
        {path: 'view/:id', component: ViewItemComponent},
        {path: 'edit/:id', component: EditItemComponent},
    ]},
    {path: '**', component: PagenotfoundComponent}
];

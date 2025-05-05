import { Routes, UrlSegment } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        matcher: (url) =>{
            if(url.length === 1 && url[0].path.match(/^@[\w]+$/gm)){
                return {
				consumed: url, 
				posParams: {
				dashboard: new UrlSegment(url[0].path.slice(1), {})}};
            }
            else{
                return null;
            }
        },
        component: DashboardComponent
    }
];

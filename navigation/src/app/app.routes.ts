import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { InventoryComponent } from './inventory/inventory.component';

export const routes: Routes = [
    {path: 'product', component: ProductComponent},
    {path: 'inventory', component: InventoryComponent}
];
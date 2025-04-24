import { Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const routes: Routes = [
    {path: 'shopping-cart', component:ShoppingCartComponent},
    {path: 'about-us', component:AboutUsComponent},
];

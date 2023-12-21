import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail-product/:id', component: CardDetailComponent},
  { path: 'product/:id', component: ProductFormComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product-list', component: ProductListComponent, 
    children: [
      { path: 'buscador',
        children: [
          { path: ':variable', component: ProductListComponent},
          { path: ':priceMin/:priceMax', component: ProductListComponent}
        ]}
  ]},
  { path: '**', component: ProductListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

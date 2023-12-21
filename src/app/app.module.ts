import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CardDetailComponent } from './components/card-detail/card-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { AsideComponent } from './shared/aside/aside.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FooterComponent,
    NavbarComponent,
    ProductFormComponent,
    ProductCardComponent,
    CardDetailComponent,
    CartComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

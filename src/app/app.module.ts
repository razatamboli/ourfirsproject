import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Product } from './shared/components/product/product.component';
import { Products } from './shared/components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    Product,
    Products
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

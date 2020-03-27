import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarProductComponent } from './navbar-product/navbar-product.component';
import { FeatureProductComponent } from './feature-product/feature-product.component';
import { NavbarSecondComponent } from './navbar-second/navbar-second.component';
import { ProductCategoryComponent } from './product-category/product-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarTopComponent,
    NavbarProductComponent,
    FeatureProductComponent,
    NavbarSecondComponent,
    ProductCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

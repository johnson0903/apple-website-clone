import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { FeatureProductComponent} from './feature-product/feature-product.component';
const routes: Routes = [
  { path: "", redirectTo: "/", pathMatch: "full"},
  { path: 'tw/:category', component: ProductCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

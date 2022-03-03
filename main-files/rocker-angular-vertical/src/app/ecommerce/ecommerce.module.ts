import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent,
    AddNewProductsComponent,
    OrdersComponent,
    ProfileEditorComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }

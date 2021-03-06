import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ContentRoutingModule } from './content-routing.module';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { TypographyComponent } from './typography/typography.component';
import { TextUtilitiesComponent } from './text-utilities/text-utilities.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddCategory } from '../Admin/Category/AddCategory/AddCategory.component';


@NgModule({
  declarations: [
    GridSystemComponent, 
    TypographyComponent, 
    TextUtilitiesComponent, CouponComponent, AddCategory
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    NgbModule
  ]
})
export class ContentModule { }

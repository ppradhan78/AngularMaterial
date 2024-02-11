import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ProductsService],
  //providers: [],
})
export class ProductsModule { }

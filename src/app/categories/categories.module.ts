import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from './categories.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [CategoriesService],
  //providers: [],
})
export class CategoriesModule { }

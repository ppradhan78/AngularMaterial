import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CustomersComponent } from './customers/customers.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RegionComponent } from './region/region.component';
import { ShippersComponent } from './shippers/shippers.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'region', component: RegionComponent },
  { path: 'shippers', component: ShippersComponent },
  { path: 'suppliers', component: SuppliersComponent },
  // { path: 'product', loadChildren: './product/product.module#ProductModule' },
  // { path: 'employee', loadChildren: './employee/employee.module#EmployeeModule'},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

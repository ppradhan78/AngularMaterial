import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesModule } from './categories/categories.module';
import { CustomersComponent } from './customers/customers.component';
import { CustomersModule } from './customers/customers.module';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeModule } from './employee/employee.module';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegionComponent } from './region/region.component';
import { RegionModule } from './region/region.module';
import { ShippersComponent } from './shippers/shippers.component';
import { ShippersModule } from './shippers/shippers.module';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SuppliersModule } from './suppliers/suppliers.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ProductsService } from './products/products.service';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ShippersComponent,
    SuppliersComponent,
    RegionComponent,
    CustomersComponent,
    MenuComponent,
    HomeComponent,
    EmployeeComponent,
    ProductsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CategoriesModule,
    CustomersModule,
    RegionModule,
    ShippersModule,
    SuppliersModule,
    EmployeeModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule

  ],
  /*providers: [LoggerService],*/
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from './products.service';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IProducts } from '../models/IProducts';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['productId', 'productName', 'supplierId', 'categoryId', 'quantityPerUnit', 'unitPrice', 'unitsInStock', 'unitsOnOrder', 'reorderLevel', 'discontinued'];
  Products: IProducts[] = [];
  dataSource = new MatTableDataSource<IProducts>(this.Products)

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private ProductsService: ProductsService) {
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getAllProducts(): any {
    this.ProductsService.getAllProducts().subscribe(responce => {
      this.Products = responce;
      this.dataSource = new MatTableDataSource(this.Products);
    })

  }
}

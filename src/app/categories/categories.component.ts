import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from './categories.service';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ICategories } from '../models/ICategories';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  //,providers: [LoggerService]
  //imports: [MatTableModule]
  //standalone: true,
  //imports: [MatTableModule, MatPaginatorModule],
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['categoryId', 'categoryName', 'description'];
  Categories: ICategories[] = [];
  //dataSource = new MatTableDataSource(this.Categories);
  dataSource = new MatTableDataSource<ICategories>(this.Categories)

  //@ViewChild(MatSort) sort = new MatSort();
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  constructor(private categoriesService: CategoriesService) {
  }
  ngOnInit(): void {
    this.getAllCategories();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getAllCategories(): any {
    this.categoriesService.getAllcategories().subscribe(responce => {
      this.Categories = responce;
      this.dataSource = new MatTableDataSource(this.Categories);
    })

  }
}

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockProductsService: any;
  beforeEach(async () => {
    mockProductsService = jasmine.createSpyObj('ProductsService', ['getAllProducts']);
    mockProductsService.getAllProducts.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        ProductsComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:
        [
          { provide: { ProductsService, useValue: mockProductsService } }
        ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

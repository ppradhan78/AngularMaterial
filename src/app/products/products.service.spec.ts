import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return getAllProducts', () => {
    const mockResponse: any[] = [{}];
    service.getAllProducts().subscribe(responce => {
      expect(responce).not.toBeNull();
    })
    const url = "https://demodata.grapecity.com/northwind/api/v1/Products";
    const request = httpTestingController.expectOne({
      method: 'GET',
      url: url
    })
    request.flush(mockResponse);
  });
});

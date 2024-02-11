import { TestBed } from '@angular/core/testing';

import { CategoriesService } from './categories.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    service = TestBed.inject(CategoriesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return getAllcategories', () => {
    const mockResponse: any[] = [{}];
    service.getAllcategories().subscribe(responce => {
      expect(responce).not.toBeNull();
    })
    const url = "https://demodata.grapecity.com/northwind/api/v1/Categories";
    const request = httpTestingController.expectOne({
      method: 'GET',
      url: url
    })
    request.flush(mockResponse);
  });
});

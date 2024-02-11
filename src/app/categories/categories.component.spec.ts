import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CategoriesComponent } from './categories.component';
import { CategoriesService } from './categories.service';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  let mockCategoriesService: any;
  beforeEach(async () => {
    mockCategoriesService = jasmine.createSpyObj('CategoriesService', ['getAllcategories']);
    mockCategoriesService.getAllcategories.and.returnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        CategoriesComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:
        [
          { provide: { CategoriesService, useValue: mockCategoriesService } }
        ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

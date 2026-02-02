import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubicCategoryProducts } from './incubic-category-products';

describe('IncubicCategoryProducts', () => {
  let component: IncubicCategoryProducts;
  let fixture: ComponentFixture<IncubicCategoryProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncubicCategoryProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncubicCategoryProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

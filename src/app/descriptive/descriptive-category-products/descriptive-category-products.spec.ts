import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveCategoryProducts } from './descriptive-category-products';

describe('DescriptiveCategoryProducts', () => {
  let component: DescriptiveCategoryProducts;
  let fixture: ComponentFixture<DescriptiveCategoryProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptiveCategoryProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptiveCategoryProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

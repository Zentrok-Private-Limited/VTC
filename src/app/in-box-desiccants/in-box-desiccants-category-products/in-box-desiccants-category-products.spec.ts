import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBoxDesiccantsCategoryProducts } from './in-box-desiccants-category-products';

describe('InBoxDesiccantsCategoryProducts', () => {
  let component: InBoxDesiccantsCategoryProducts;
  let fixture: ComponentFixture<InBoxDesiccantsCategoryProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InBoxDesiccantsCategoryProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBoxDesiccantsCategoryProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

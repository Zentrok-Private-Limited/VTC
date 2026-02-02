import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductDetails } from './single-product-details';

describe('SingleProductDetails', () => {
  let component: SingleProductDetails;
  let fixture: ComponentFixture<SingleProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

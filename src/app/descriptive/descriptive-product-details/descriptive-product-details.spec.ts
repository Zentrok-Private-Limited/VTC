import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveProductDetails } from './descriptive-product-details';

describe('DescriptiveProductDetails', () => {
  let component: DescriptiveProductDetails;
  let fixture: ComponentFixture<DescriptiveProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptiveProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptiveProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

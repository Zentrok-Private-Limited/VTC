import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubicProductDetails } from './incubic-product-details';

describe('IncubicProductDetails', () => {
  let component: IncubicProductDetails;
  let fixture: ComponentFixture<IncubicProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncubicProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncubicProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

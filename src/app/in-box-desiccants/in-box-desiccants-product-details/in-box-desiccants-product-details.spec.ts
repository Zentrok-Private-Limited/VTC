import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBoxDesiccantsProductDetails} from './in-box-desiccants-product-details';

describe('InBoxDesiccantsProductDetails', () => {
  let component: InBoxDesiccantsProductDetails;
  let fixture: ComponentFixture<InBoxDesiccantsProductDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InBoxDesiccantsProductDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBoxDesiccantsProductDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiveCategories } from './descriptive-categories'; 

describe('DescriptiveCategories', () => {
  let component: DescriptiveCategories;
  let fixture: ComponentFixture<DescriptiveCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptiveCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptiveCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

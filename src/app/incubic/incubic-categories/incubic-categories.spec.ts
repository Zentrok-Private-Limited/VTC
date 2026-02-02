import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncubicCategories } from './incubic-categories';

describe('IncubicCategories', () => {
  let component: IncubicCategories;
  let fixture: ComponentFixture<IncubicCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncubicCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncubicCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

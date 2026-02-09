import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySolutions } from './industry-solutions';

describe('IndustrySolutions', () => {
  let component: IndustrySolutions;
  let fixture: ComponentFixture<IndustrySolutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySolutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySolutions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

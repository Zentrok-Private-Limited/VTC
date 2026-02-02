import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalciumBased } from './calcium-based';

describe('CalciumBased', () => {
  let component: CalciumBased;
  let fixture: ComponentFixture<CalciumBased>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalciumBased]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalciumBased);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

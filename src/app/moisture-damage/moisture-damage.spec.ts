import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoistureDamage } from './moisture-damage';

describe('MoistureDamage', () => {
  let component: MoistureDamage;
  let fixture: ComponentFixture<MoistureDamage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoistureDamage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoistureDamage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

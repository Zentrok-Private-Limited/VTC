import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoistureDamagePrevention } from './moisture-damage-prevention';

describe('MoistureDamagePrevention', () => {
  let component: MoistureDamagePrevention;
  let fixture: ComponentFixture<MoistureDamagePrevention>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoistureDamagePrevention]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoistureDamagePrevention);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

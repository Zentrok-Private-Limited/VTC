import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desiccants } from './desiccants';

describe('Desiccants', () => {
  let component: Desiccants;
  let fixture: ComponentFixture<Desiccants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desiccants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desiccants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

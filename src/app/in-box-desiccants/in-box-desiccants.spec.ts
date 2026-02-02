import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBoxDesiccants } from './in-box-desiccants';

describe('InBoxDesiccants', () => {
  let component: InBoxDesiccants;
  let fixture: ComponentFixture<InBoxDesiccants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InBoxDesiccants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBoxDesiccants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

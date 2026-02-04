import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDesiccants } from './container-desiccants';

describe('ContainerDesiccants', () => {
  let component: ContainerDesiccants;
  let fixture: ComponentFixture<ContainerDesiccants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDesiccants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDesiccants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

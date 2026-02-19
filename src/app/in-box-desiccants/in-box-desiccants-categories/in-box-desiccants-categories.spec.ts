import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InBoxDesiccantsCategories } from './in-box-desiccants-categories'; 

describe('InboxDesiccantsCategories', () => {
  let component: InBoxDesiccantsCategories;
  let fixture: ComponentFixture<InBoxDesiccantsCategories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InBoxDesiccantsCategories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InBoxDesiccantsCategories);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

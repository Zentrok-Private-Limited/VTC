import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialResponsibilities } from './social-responsibilities';

describe('SocialResponsibilities', () => {
  let component: SocialResponsibilities;
  let fixture: ComponentFixture<SocialResponsibilities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialResponsibilities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialResponsibilities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

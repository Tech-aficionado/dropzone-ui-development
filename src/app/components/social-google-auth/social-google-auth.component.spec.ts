import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialGoogleAuthComponent } from './social-google-auth.component';

describe('SocialGoogleAuthComponent', () => {
  let component: SocialGoogleAuthComponent;
  let fixture: ComponentFixture<SocialGoogleAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialGoogleAuthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialGoogleAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

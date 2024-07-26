import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTopBarComponent } from './custom-top-bar.component';

describe('CustomTopBarComponent', () => {
  let component: CustomTopBarComponent;
  let fixture: ComponentFixture<CustomTopBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomTopBarComponent],
    });
    fixture = TestBed.createComponent(CustomTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

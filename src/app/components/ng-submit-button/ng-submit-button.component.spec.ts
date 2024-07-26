import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSubmitButtonComponent } from './ng-submit-button.component';

describe('NgSubmitButtonComponent', () => {
  let component: NgSubmitButtonComponent;
  let fixture: ComponentFixture<NgSubmitButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgSubmitButtonComponent],
    });
    fixture = TestBed.createComponent(NgSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

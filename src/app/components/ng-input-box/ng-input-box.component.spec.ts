import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInputBoxComponent } from './ng-input-box.component';

describe('NgInputBoxComponent', () => {
  let component: NgInputBoxComponent;
  let fixture: ComponentFixture<NgInputBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgInputBoxComponent],
    });
    fixture = TestBed.createComponent(NgInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAGiftComponent } from './find-a-gift.component';

describe('FindAGiftComponent', () => {
  let component: FindAGiftComponent;
  let fixture: ComponentFixture<FindAGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

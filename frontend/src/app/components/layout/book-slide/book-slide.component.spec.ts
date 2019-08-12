import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSlideComponent } from './book-slide.component';

describe('BookSlideComponent', () => {
  let component: BookSlideComponent;
  let fixture: ComponentFixture<BookSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

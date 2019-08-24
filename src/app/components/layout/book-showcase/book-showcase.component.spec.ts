import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShowcaseComponent } from './book-showcase.component';

describe('BookShowcaseComponent', () => {
  let component: BookShowcaseComponent;
  let fixture: ComponentFixture<BookShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

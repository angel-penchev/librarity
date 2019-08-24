import { TestBed } from '@angular/core/testing';

import { RequestBooksService } from './request-books.service';

describe('BookListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestBooksService = TestBed.get(RequestBooksService);
    expect(service).toBeTruthy();
  });
});

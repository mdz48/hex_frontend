import { TestBed } from '@angular/core/testing';

import { GetBooksByAuthorUseCaseService } from './get-books-by-author-use-case.service';

describe('GetBooksByAuthorUseCaseService', () => {
  let service: GetBooksByAuthorUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBooksByAuthorUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

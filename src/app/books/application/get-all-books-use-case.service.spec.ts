import { TestBed } from '@angular/core/testing';

import { GetAllBooksUseCaseService } from './get-all-books-use-case.service';

describe('GetAllBooksUseCaseService', () => {
  let service: GetAllBooksUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllBooksUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

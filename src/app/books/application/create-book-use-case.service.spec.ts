import { TestBed } from '@angular/core/testing';

import { CreateBookUseCaseService } from './create-book-use-case.service';

describe('CreateBookUseCaseService', () => {
  let service: CreateBookUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateBookUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

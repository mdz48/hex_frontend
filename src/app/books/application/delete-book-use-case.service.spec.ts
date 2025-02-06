import { TestBed } from '@angular/core/testing';

import { DeleteBookUseCaseService } from './delete-book-use-case.service';

describe('DeleteBookUseCaseService', () => {
  let service: DeleteBookUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteBookUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

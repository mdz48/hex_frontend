import { TestBed } from '@angular/core/testing';

import { BookRespositoryService } from './book-respository.service';

describe('BookRespositoryService', () => {
  let service: BookRespositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRespositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

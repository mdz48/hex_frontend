import { TestBed } from '@angular/core/testing';

import { AddFavoriteUseCaseService } from './add-favorite-use-case.service';

describe('AddFavoriteUseCaseService', () => {
  let service: AddFavoriteUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddFavoriteUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

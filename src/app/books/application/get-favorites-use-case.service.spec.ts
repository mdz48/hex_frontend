import { TestBed } from '@angular/core/testing';

import { GetFavoritesUseCaseService } from './get-favorites-use-case.service';

describe('GetFavoritesUseCaseService', () => {
  let service: GetFavoritesUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFavoritesUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

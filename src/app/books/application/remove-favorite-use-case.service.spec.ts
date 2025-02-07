import { TestBed } from '@angular/core/testing';

import { RemoveFavoriteUseCaseService } from './remove-favorite-use-case.service';

describe('RemoveFavoriteUseCaseService', () => {
  let service: RemoveFavoriteUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveFavoriteUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

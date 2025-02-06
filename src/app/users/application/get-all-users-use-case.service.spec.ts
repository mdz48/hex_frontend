import { TestBed } from '@angular/core/testing';

import { GetAllUsersUseCaseService } from './get-all-users-use-case.service';

describe('GetAllUsersUseCaseService', () => {
  let service: GetAllUsersUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllUsersUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

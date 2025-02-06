import { TestBed } from '@angular/core/testing';

import { CreateUserUseCaseService } from './create-user-use-case.service';

describe('CreateUserUseCaseService', () => {
  let service: CreateUserUseCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserUseCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../domain/user';
import { IUser } from '../domain/iuser';
import { UserRepositoryService } from '../infrastructure/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllUsersUseCaseService {
  constructor(private userRepository: UserRepositoryService) {}

  execute(): Observable<User[]> {
    return this.userRepository.getAll();
  }
}

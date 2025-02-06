import { Injectable } from '@angular/core';
import { UserRepositoryService } from '../infrastructure/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class CreateUserUseCaseService {

  constructor(private userRepository : UserRepositoryService) { }

  execute(name: string, email: string, password: string) {
    return this.userRepository.save({name, email, password});
  }
}

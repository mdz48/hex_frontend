import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepositoryService } from '../infrastructure/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class LoginUseCaseService {
  constructor(private userRepository: UserRepositoryService) {}

  execute(email: string, password: string): Observable<boolean> {
    return this.userRepository.login(email, password);
  }
}

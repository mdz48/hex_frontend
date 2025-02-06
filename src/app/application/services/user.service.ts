import { Injectable, Inject } from '@angular/core';
import { IUser } from '../../domain/repositories/iuser';
import { User } from '../../domain/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(@Inject('IUser') private userRepository: IUser) { }

  getActiveUsers(): Observable<User[]> {
    return this.userRepository.getAll();
  }
}

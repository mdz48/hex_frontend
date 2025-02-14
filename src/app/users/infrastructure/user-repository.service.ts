import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../domain/iuser';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService implements IUser {
  private API_URL = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API_URL);
  }

  getByID(id: number): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  save(user: User): Observable<User> {
    return this.http.post<User>(this.API_URL, user);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.API_URL}/${id}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/login`, { email, password });
  }
}

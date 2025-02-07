import { Injectable } from '@angular/core';
import { IBook } from '../domain/ibook';
import { Observable } from 'rxjs';
import { Book } from '../domain/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookRespositoryService implements IBook {
  private API_URL = 'http://localhost:8080/books';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_URL);
  }

  getBooksByAuthor(authorid: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.API_URL}/author/${authorid}`);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API_URL}/${id}`);
  }

  save(title: string, author: number, description: string): Observable<Book> {
    return this.http.post<Book>(this.API_URL,  {title, author, description});
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URL}/${book.id}`, book);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  addFavorite(userId: number, bookId: number): Observable<void> {
    return this.http.post<void>(`${this.API_URL}/favorites`, {userId, bookId});
  }

  removeFavorite(userId: number, bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/favorites/${userId}/${bookId}`);
  }
  
  getFavorites(userId: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.API_URL}/favorites/${userId}`);
  }
}

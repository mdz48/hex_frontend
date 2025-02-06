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

  save(Title: string, Author: number, Description: string): Observable<Book> {
    return this.http.post<Book>(this.API_URL,  {Title, Author, Description});
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.API_URL}/${book.Id}`, book);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  
}

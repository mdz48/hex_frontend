import { Observable } from "rxjs";
import { Book } from "./book";

export interface IBook {
    getAll(): Observable<Book[]>;
    getBook(id: number): Observable<Book>;
    save(Title: string, Author: number, Description: string): Observable<Book>;
    update(book: Book): Observable<Book>;
    delete(id: number): Observable<void>;
    getBooksByAuthor(authorid: number): Observable<Book[]>;
}

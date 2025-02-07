import { Observable } from "rxjs";
import { Book } from "./book";

export interface IBook {
    getAll(): Observable<Book[]>;
    getBook(id: number): Observable<Book>;
    save(Title: string, Author: number, Description: string): Observable<Book>;
    update(book: Book): Observable<Book>;
    delete(id: number): Observable<void>;
    getBooksByAuthor(authorid: number): Observable<Book[]>;
    addFavorite(userId: number, bookId: number ): Observable<void>;
    removeFavorite(userId: number, bookId: number): Observable<void>;
    getFavorites(userId: number): Observable<Book[]>;
}

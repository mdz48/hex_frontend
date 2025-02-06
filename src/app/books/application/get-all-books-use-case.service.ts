import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../domain/book';
import { BookRespositoryService } from '../infrastructure/book-respository.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllBooksUseCaseService {
  constructor(private bookRepository: BookRespositoryService) {}

  execute(): Observable<Book[]> {
    return this.bookRepository.getAll();
  }
}

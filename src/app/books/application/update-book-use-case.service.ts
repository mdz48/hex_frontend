import { Injectable } from '@angular/core';
import { BookRespositoryService } from '../infrastructure/book-respository.service';
import { UpdateBook } from '../domain/create-book';

@Injectable({
  providedIn: 'root'
})
export class UpdateBookUseCaseService {
  constructor(private bookRepository: BookRespositoryService) { }

  execute(id: number, book: UpdateBook) {
    return this.bookRepository.update(id, book);
  }
}

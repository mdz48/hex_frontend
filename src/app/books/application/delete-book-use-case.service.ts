import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../domain/book';
import { BookRespositoryService } from '../infrastructure/book-respository.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteBookUseCaseService {

  constructor(private bookRepository: BookRespositoryService) {}

  execute(id: number): Observable<void> {
    return this.bookRepository.delete(id);
  }
}

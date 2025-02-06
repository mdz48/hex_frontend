import { Injectable } from '@angular/core';
import { BookRespositoryService } from '../infrastructure/book-respository.service';

@Injectable({
  providedIn: 'root'
})
export class CreateBookUseCaseService  {

  constructor(private createBookUseCase : BookRespositoryService) { }

  execute(Title: string, Author: number, Description: string) {
    return this.createBookUseCase.save(Title, Author, Description);
  }
}

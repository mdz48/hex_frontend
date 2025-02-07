import { Injectable } from '@angular/core';
import { BookRespositoryService } from '../infrastructure/book-respository.service';

@Injectable({
  providedIn: 'root'
})
export class AddFavoriteUseCaseService {

  constructor(private addFavorite : BookRespositoryService) { }

  execute(userId: number, bookId: number) {
    return this.addFavorite.addFavorite(userId, bookId);
  }
}

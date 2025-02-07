import { Injectable } from '@angular/core';
import { BookRespositoryService } from '../infrastructure/book-respository.service';

@Injectable({
  providedIn: 'root'
})
export class RemoveFavoriteUseCaseService {

  constructor(private removeFavorite : BookRespositoryService) { }

  execute(userId: number, bookId: number) {
    return this.removeFavorite.removeFavorite(userId, bookId);
  }
}

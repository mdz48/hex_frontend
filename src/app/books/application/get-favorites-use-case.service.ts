import { Injectable } from '@angular/core';
import { BookRespositoryService } from '../infrastructure/book-respository.service';

@Injectable({
  providedIn: 'root'
})
export class GetFavoritesUseCaseService {

  constructor(private getFavorites : BookRespositoryService) { }

  execute(userId: number) {
    return this.getFavorites.getFavorites(userId);
  }
}

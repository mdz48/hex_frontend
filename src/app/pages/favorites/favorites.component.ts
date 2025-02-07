import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { PostComponent } from '../../components/post/post.component';
import { Book } from '../../books/domain/book';
import { GetFavoritesUseCaseService } from '../../books/application/get-favorites-use-case.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, NavbarComponent, PostComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent implements OnInit {
  books: Book[] = [];
  loading: boolean = true;
  error: string | null = null;
  currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  constructor(private getFavoritesUseCase: GetFavoritesUseCaseService) {}

  ngOnInit(): void {
    if (this.currentUser.id) {
      this.getFavoritesUseCase.execute(this.currentUser.id).subscribe({
        next: (favorites) => {
          this.books = favorites;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Error al cargar favoritos';
          this.loading = false;
          console.error('Error:', error);
        }
      });
    }
  }
}
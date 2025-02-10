import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { Book } from '../../books/domain/book';
import { User } from '../../users/domain/user';
import { DeleteBookUseCaseService } from '../../books/application/delete-book-use-case.service';
import { Router } from '@angular/router';
import { AddFavoriteUseCaseService } from '../../books/application/add-favorite-use-case.service';
import { PrimeIcons } from 'primeng/api';
import { GetFavoritesUseCaseService } from '../../books/application/get-favorites-use-case.service';
import { RemoveFavoriteUseCaseService } from '../../books/application/remove-favorite-use-case.service';
import { UpdateBookUseCaseService } from '../../books/application/update-book-use-case.service';
import { UpdateBook } from '../../books/domain/create-book';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DialogModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() book!: Book;
  editVisible: boolean = false;
  editBookForm: FormGroup;
  isFavorite: boolean = false;
  currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}') as User;

  constructor(
    private deleteUseCase: DeleteBookUseCaseService,
    private router: Router,
    private addFavoriteUseCase: AddFavoriteUseCaseService,
    private get: GetFavoritesUseCaseService,
    private removeFavoriteUseCase: RemoveFavoriteUseCaseService,
    private updateBookUseCase: UpdateBookUseCaseService,
  ) {
    this.editBookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.checkIfFavorite();
  }

  checkIfFavorite() {
    if (this.currentUser.id) {
      this.get.execute(this.currentUser.id).subscribe({
        next: (favorites) => {
          this.isFavorite = favorites.some(fav => fav.id === this.book.id);
        }
      });
    }
  }

  onDelete(book: Book) {
    this.deleteUseCase.execute(this.book.id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => console.error('Error:', error)
    });
  }

  goAuthorProfile(book: Book) {
    localStorage.setItem('temp', this.book.author_id.toString());
    this.router.navigate(['/profile']);
  }

  onFavorite(book: Book) {
    if (this.currentUser.id && this.book.id) {
      if (!this.isFavorite) {
        this.addFavoriteUseCase.execute(this.currentUser.id, this.book.id).subscribe({
          next: () => {
            this.isFavorite = true;
          }
        });
      } else {
        this.removeFavoriteUseCase.execute(this.currentUser.id, this.book.id).subscribe({
          next: () => {
            this.isFavorite = false;
          }
        });
      }
    }
  }

  showEditDialog() {
    this.editBookForm.patchValue({
      title: this.book.title,
      description: this.book.description
    });
    this.editVisible = true;
  }

  updateBook() {
    if (this.editBookForm.valid) {
      const updatedBook: UpdateBook = {
        id: this.book.id,
        title: this.editBookForm.get('title')?.value,
        author: this.book.author_id,
        description: this.editBookForm.get('description')?.value
      };

      this.updateBookUseCase.execute(this.book.id, updatedBook).subscribe({
        next: () => {
          this.editVisible = false;
          window.location.reload();
        },
        error: (error) => console.error('Error:', error)
      });
    }
  }
}

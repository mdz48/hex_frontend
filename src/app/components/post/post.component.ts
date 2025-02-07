import { Component, Input } from '@angular/core';
import { Book } from '../../books/domain/book';
import { CommonModule } from '@angular/common';
import { User } from '../../users/domain/user';
import { DeleteBookUseCaseService } from '../../books/application/delete-book-use-case.service';
import { Router } from '@angular/router';
import { AddFavoriteUseCaseService } from '../../books/application/add-favorite-use-case.service';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() book !: Book
  currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}') as User;

  constructor(private deleteUseCase : DeleteBookUseCaseService, private router : Router,
    private addFavoriteUseCase : AddFavoriteUseCaseService,
  ) {}

  onDelete(book : Book) {
    this.deleteUseCase.execute(this.book.id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => console.error('Error:', error)
    });
  }

  goAuthorProfile(book : Book) {
    localStorage.setItem('temp', this.book.author_id.toString());
    this.router.navigate(['/profile']);
  }

  onFavorite(book : Book) {
    if (this.currentUser.id && this.book.id) {
      this.addFavoriteUseCase.execute(this.currentUser.id, this.book.id).subscribe({
        next: () => {
          window.location.reload();
        },
        error: (error) => console.error('Error:', error)
      });
    }
  }


}

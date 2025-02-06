import { Component, Input } from '@angular/core';
import { Book } from '../../books/domain/book';
import { CommonModule } from '@angular/common';
import { User } from '../../users/domain/user';
import { DeleteBookUseCaseService } from '../../books/application/delete-book-use-case.service';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input() book !: Book
  currentUser: User = JSON.parse(localStorage.getItem('currentUser') || '{}') as User;

  constructor(private deleteUseCase : DeleteBookUseCaseService) {}

  onDelete(book : Book) {
    this.deleteUseCase.execute(this.book.Id).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => console.error('Error:', error)
    });
  }


}

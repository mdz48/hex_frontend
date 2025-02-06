import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { GetBooksByAuthorUseCaseService } from '../../books/application/get-books-by-author-use-case.service';
import { Book } from '../../books/domain/book';
import { PostComponent } from "../../components/post/post.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent, PostComponent, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  id = localStorage.getItem('temp') || '1';
  books: Book[] = [];

  constructor(private getBooksbyAuthor : GetBooksByAuthorUseCaseService) {}

  ngOnInit(): void {    
    this.getBooksbyAuthor.execute(Number(this.id)).subscribe({
      next: (response) => {
        console.log('Response:', response);
        this.books = response;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}

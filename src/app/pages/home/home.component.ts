import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { GetAllBooksUseCaseService } from '../../books/application/get-all-books-use-case.service';
import { Book } from '../../books/domain/book';
import { PostComponent } from "../../components/post/post.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, CommonModule, PostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  books: Book[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private getAllBooksUseCase: GetAllBooksUseCaseService) {}

  ngOnInit(): void {
    this.getAllBooksUseCase.execute().subscribe({
      next: (response) => {
        console.log('Response:', response);
          this.books = response;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los libros';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }
}

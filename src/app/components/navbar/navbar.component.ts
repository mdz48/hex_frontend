import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateBookUseCaseService } from '../../books/application/create-book-use-case.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DialogModule, CommonModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  visible: boolean = false;
  bookForm: FormGroup;

  constructor(
    private router: Router,
    private createBookUseCase: CreateBookUseCaseService
  ) {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  showDialog() {
    this.visible = true;
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  createBook() {
    if (this.bookForm.valid) {
      const userId = localStorage.getItem('temp') || '1';
      const bookData = {
        ...this.bookForm.value,
        author: Number(userId)
      };

      this.createBookUseCase.execute(
        bookData.title,
        bookData.author,
        bookData.description
      ).subscribe({
        next: () => {
          this.visible = false;
          this.bookForm.reset();
          window.location.reload();
        },
        error: (error) => console.error('Error:', error)
      });
    }
  }

  goProfile() {
    this.router.navigate(['/profile']);
  }

  logOut() {
    this.router.navigate(['/']);
    localStorage.removeItem('currentUser');
  }

  postBook() {
    this.router.navigate(['/post']);
  }
}

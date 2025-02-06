import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { User } from '../../users/domain/user';
import { GetAllUsersUseCaseService } from '../../users/application/get-all-users-use-case.service';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  users : User[] = [];

  constructor(private getAllUsersUseCase: GetAllUsersUseCaseService) {}

  ngOnInit() {
    this.getAllUsersUseCase.execute().subscribe(
      users => {
        this.users = users;
        console.log('Usuarios recibidos:', users); // Se ejecutará cuando llegue la respuesta
      },
      error => console.error('Error:', error) // Para ver si hay errores
    );
  }
}

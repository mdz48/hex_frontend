import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { User } from '../../users/domain/user';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { CreateUserUseCaseService } from '../../users/application/create-user-use-case.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUseCaseService } from '../../users/application/login-use-case.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ToastModule, ButtonModule, DialogModule, ReactiveFormsModule],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  visible: boolean = false;

  constructor(
    private loginUseCase: LoginUseCaseService,
    private messageService: MessageService,
    private router: Router,
    private createNewUserUseCase: CreateUserUseCaseService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });

    this.registerForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  showSuccess() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
  }

  showDialog() {
    this.visible = true;
  }

  registerUser() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.createNewUserUseCase.execute(
        userData.name,
        userData.email,
        userData.password
      ).subscribe({
        next: (user) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Éxito',
            detail: 'Usuario registrado correctamente'
          });
          this.visible = false;
          this.registerForm.reset();
        },
        error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error al registrar usuario'
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Por favor, complete todos los campos'
      });
    }
  }

  onLogin() {
    if (this.loginForm.valid) {
      const {email, password} = this.loginForm.value;
      
      this.loginUseCase.execute(email, password).subscribe({
        next: (success) => {
          if (success) {
            this.messageService.add({
              severity: 'success',
              summary: 'Éxito',
              detail: 'Login correcto'
            });
            this.router.navigate(['/home']);
          } else {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Credenciales incorrectas'
            });
          }
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Error en el servidor'
          });
        }
      });
    }
  }
}

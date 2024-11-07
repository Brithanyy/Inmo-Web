import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  templateUrl: './management-login.component.html',
  styleUrl: './management-login.component.css'
})
export class LoginComponent {

  mensajeError: string = '';
  isPasswordVisible: boolean = false;

  servicioUsuario =  inject(UserService);
  router = inject(Router);
  logo = 'assets/IMG/LogoTipo.jpeg';
  formBuiler = inject(FormBuilder);
  formLogin = this.formBuiler.nonNullable.group({

    userName: ['', Validators.required],
    password: ['', [Validators.required,  Validators.minLength(8)]]
  });

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  get userName() {
    return this.formLogin.get('userName');
  }

  get password() {
    return this.formLogin.get('password');
  }

  login() {

    if (this.formLogin.valid) {

      this.mensajeError = '';

      let usuarioBuffer: User = this.formLogin.getRawValue();

      this.servicioUsuario.getUserByCredentials(usuarioBuffer.userName, usuarioBuffer.password).subscribe({

        next: (returnedUser: User) => {

          if (returnedUser) {

            this.servicioUsuario.updateUserLoggedStatus(String(returnedUser.id), true).subscribe({

              next: () => this.router.navigate(['/management-home']),

              error: (returnedError) => {

                this.mensajeError = "Error al actualizar el estado del usuario: " + returnedError.message;
                this.showErrorMessage(this.mensajeError);
              }
            });
          } 

          else {
            this.mensajeError = "Error las credenciales del usuario son inválidas";
            this.showErrorMessage(this.mensajeError);
          }
        },
        error: (returnedError) => {
          this.mensajeError = "Error en el inicio de sesión";
          this.showErrorMessage(this.mensajeError);
        }
      });
    }
    else {
      this.mensajeError = "Por favor, complete todos los campos";
      this.showErrorMessage(this.mensajeError);
    }
  }

  private showErrorMessage(mensaje: string) {

    this.mensajeError = mensaje;
  
    setTimeout(() => {
      this.mensajeError = '';
    }, 3000);
  }
}

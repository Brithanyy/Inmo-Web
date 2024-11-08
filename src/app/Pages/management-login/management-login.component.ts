import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/User/user.service';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ManagementHeaderComponent,
    ManagementFooterComponent
],
  templateUrl: './management-login.component.html',
  styleUrl: './management-login.component.css'
})
export class LoginComponent implements OnInit {

  logo = 'assets/IMG/LogoTipo.jpeg';
  usuarios: User[] = [];
  mensajeError: string = '';
  isPasswordVisible: boolean = false;

  servicioUsuario =  inject(UserService);
  router = inject(Router);
  formBuiler = inject(FormBuilder);
  formLogin = this.formBuiler.nonNullable.group({

    userName: ['', Validators.required],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.servicioUsuario.getAllUsers().subscribe({

      next: (returnedUsers: User[]) => this.usuarios = returnedUsers,

      error: (returnedError) => {
        this.mensajeError = "Error al cargar usuarios"
        this.showErrorMessage(this.mensajeError);
      }
    });
  }

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

        next: (returnedUsers: User[]) => {

          if (returnedUsers.length > 0) {

            const user = returnedUsers[0];

            this.servicioUsuario.updateUserLoggedStatus(String(user.id), true).subscribe({

              next: () => this.router.navigate(['/management-home']),

              error: () => {

                this.mensajeError = "Error al actualizar el estado del usuario";
                this.showErrorMessage(this.mensajeError);
              }
            });
          } 
          else {

            this.mensajeError = "Credenciales inválidas";
            this.showErrorMessage(this.mensajeError);
          }
        },

        error: () => {
          this.mensajeError = "Error en el inicio de sesión: ";
          this.showErrorMessage(this.mensajeError);
        }
      });
    }

    else {
      console.log(this.formLogin.valid);
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

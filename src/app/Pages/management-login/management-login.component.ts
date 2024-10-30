import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './management-login.component.html',
  styleUrl: './management-login.component.css'
})
export class LoginComponent {
  logo = 'assets/IMG/LogoTipo.jpeg'
  usuario = {
    user: '', //Almacena el valor del nombre de usuario
    password: '' // Almacena el valor de la contraseña
  }
  isPasswordVisible: boolean = false; // Controla la visibilidad de la contraseña

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Alterna la visibilidad
  }

  userAdmin = 'admin';
  passAdmin = 'admin';

  login() {
    if(this.usuario.user === this.userAdmin && this.usuario.password === this.passAdmin) alert("INICIANDO SESION");
  }

}
